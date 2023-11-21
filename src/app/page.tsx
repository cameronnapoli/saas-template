'use client';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Modal from '@/components/organisms/Modal';
import FAQSection from '@/components/sections/FAQSection';

const Home: React.FunctionComponent = () => {
  return (
    <main>
      Homepage<br />
      <Button
        onClick={() => {
          Modal.open({
            body: (
              <div>
                <p>Modal</p>
                <Button size="small" onClick={() => Modal.close()}>Close</Button>
              </div>
            ),
          });
        }}
      >
        Open Modal
      </Button>
      <Input />
      <Modal.Component />
      <Toaster />
      <FAQSection />
    </main>
  );
};

export default Home;
