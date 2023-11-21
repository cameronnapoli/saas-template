/* eslint-disable import/no-anonymous-default-export */
import classNames from 'classnames';
import React from 'react';
import { create } from 'zustand';

import styles from './styles.module.scss';

const useStore = create<ModalProps | undefined>(() => undefined);

interface ModalProps {
  body: JSX.Element;
  width?: number;
  style?: React.CSSProperties;
  light?: boolean;
  darkBackdrop?: boolean;
  relativePosition?: boolean;
  requireInteraction?: boolean;
}

interface InteractionProps {
  onClose?: () => void;
}

const Modal: React.FC = () => {
  const props = useStore();

  if (!props) {
    return null;
  }

  const {
    body,
    width,
    style,
    light = true,
    darkBackdrop,
    relativePosition,
    requireInteraction,
  } = props;

  return (
    <div
      className={classNames(styles.backdrop, darkBackdrop ? styles.backdropDark : styles.backdropLight)}
      onClick={!requireInteraction ? close : undefined}
    >
      <div
        className={classNames(styles.modal, light ? styles.modalLight : styles.modalDark)}
        style={{
          width,
          position: relativePosition ? 'relative' : undefined,
          ...style,
        }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {body}
      </div>
    </div>
  );
};

let closeCb: (() => void) | undefined;

const isOpen = (): boolean => {
  const props = useStore.getState();
  return !!props;
};

const close = (): void => {
  useStore.setState(undefined);
  if (closeCb) {
    closeCb();
    closeCb = undefined;
  }
};

export default {
  Component: Modal,
  isOpen,
  open: (props: ModalProps & InteractionProps): void => {
    if (props.onClose) {
      closeCb = props.onClose;
    }
    useStore.setState(props);
  },
  close,
  updateProps: (update: Partial<ModalProps>): void => {
    const props = useStore.getState();
    if (!props) {
      console.warn('Modal needs to be open to update props');
      return;
    }
    useStore.setState({ ...props, ...update });
  },
};
