import React from 'react';
import styles from './Form.module.scss';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
  const [country, setCountry] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [subject, setSubject] = React.useState('phisical');

  const { tg } = useTelegram();

  const onSendData = React.useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };

    tg.sendData(JSON.stringify(data));
  }, []);

  React.useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, []);

  React.useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить Данные',
    });
  }, []);

  React.useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={styles.form}>
      <h3>Введите ваши данные</h3>

      <input
        className={styles.input}
        type="text"
        placeholder={'Старана'}
        value={country}
        onChange={onChangeCountry}
      />

      <input
        className={styles.input}
        type="text"
        placeholder={'Улица'}
        value={street}
        onChange={onChangeStreet}
      />

      <select value={subject} onChange={onChangeSubject} className={styles.select}>
        <option value={'phisical'}>Физ.Лицо</option>
        <option value={'legal'}>Юр.Лицо</option>
      </select>
    </div>
  );
};

export default Form;
