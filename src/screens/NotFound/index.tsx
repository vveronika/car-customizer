import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageWrapper, ButtonWrapper } from './not-found.styled';
import PageTitle from 'components/ui/PageTitle';
import BaseButton from 'components/ui/BaseButton';

const NotFound = () => {
  let history = useHistory();

  const goToHomepage = () => {
    history.push('/');
  };

  return (
    <PageWrapper>
      <PageTitle size="large" title="Oops!" />
      <PageTitle title="Page not found" />
      <ButtonWrapper>
        <BaseButton onClick={goToHomepage} label="Go home" />
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default NotFound;
