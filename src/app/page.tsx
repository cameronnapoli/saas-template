'use client';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import Button from '@/components/atoms/Button';
import Modal from '@/components/organisms/Modal';

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

      <Modal.Component />
      <Toaster />
    </main>
  );
};

export default Home;
