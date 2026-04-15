import { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Alert, Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 0 80px 0;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    padding: 0 30px;
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 20px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('idle');
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success',
    key: 0,
  });

  const showToast = (message, severity) => {
    setToast((prev) => ({
      open: true,
      message,
      severity,
      key: prev.key + 1,
    }));
  };

  const handleCloseToast = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToast((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === 'submitting') {
      return;
    }

    setStatus('submitting');

    try {
      await emailjs.sendForm(
        'service_ks6uqeu',
        'template_a1snh9v',
        form.current,
        '1dw-L1hjBzC0N0MS-'
      );

      form.current.reset();
      setStatus('success');
      showToast('Лист успішно відправлено', 'success');
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      showToast('Не вдалось відправити лист, спробуйте ще раз', 'error');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Зв&apos;язок зі мною</Title>
        <Desc>Звертайтеся до мене з будь-якими питаннями чи пропозиціями!</Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactInput
            type="email"
            placeholder="Ваш Email"
            name="email"
            required
            disabled={status === 'submitting'}
          />
          <ContactInput
            type="text"
            placeholder="Ваше ім'я"
            name="name"
            required
            disabled={status === 'submitting'}
          />
          <ContactInput
            type="text"
            placeholder="Тема"
            name="subject"
            required
            disabled={status === 'submitting'}
          />
          <ContactInputMessage
            placeholder="Ваше повідомлення"
            rows="4"
            name="message"
            required
            disabled={status === 'submitting'}
          />
          <ContactButton type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Лист надсилається...' : 'Надіслати'}
          </ContactButton>
        </ContactForm>

        <Snackbar
          key={toast.key}
          open={toast.open}
          autoHideDuration={6000}
          onClose={handleCloseToast}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseToast}
            severity={toast.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;