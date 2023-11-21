import { useEffect } from 'react';
import { create } from 'zustand';

const STORE_PATH = 'onboarding';

type OnboardingRecord = Record<string, string | number | boolean>;

interface Onboarding {
  records: OnboardingRecord | null;
}

const useStore = create<Onboarding>((set) => ({
  records: null,
}));

let initialized = false;
const initialize = () => {
  if (initialized) {
    const state = useStore.getState() as Onboarding;
    return state.records;
  }
  initialized = true;
  try {
    const onboarding = localStorage.getItem(STORE_PATH);
    const parsedRecords = JSON.parse(onboarding || '{}') as OnboardingRecord;
    useStore.setState({ records: parsedRecords });
    return parsedRecords;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const useOnboarding = () => {
  const records = useStore((state) => state.records);

  useEffect(() => {
    initialize();
  }, []);

  return records;
};

export const clearOnboarding = () => {
  useStore.setState({ records: {} });
  localStorage.removeItem(STORE_PATH);
};

export const readOnboarding = () => {
  return initialize();
};

export const patchOnboarding = (
  props: Partial<OnboardingRecord>,
) => {
  const onboarding = initialize();
  if (!onboarding) {
    console.error('Onboarding not initialized');
    return null;
  }
  const updatedRecord = {
    ...onboarding,
    ...props,
  } as OnboardingRecord;
  useStore.setState({
    records: updatedRecord,
  });
  localStorage.setItem(STORE_PATH, JSON.stringify(updatedRecord));
  return updatedRecord;
};
