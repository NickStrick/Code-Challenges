import React from 'react';
import styled from 'styled-components';
import 

const LandingPage = (props) => {
    return (
        <PageContainer>
            <Cta></Cta>
            <h1>landing</h1>
        </PageContainer>
    );
};

const PageContainer = styled.div`
//   background-image: url('../images/books-landing-banner-500.jpg)
`;

const Cta = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default LandingPage;