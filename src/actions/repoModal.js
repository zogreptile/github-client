export const REPO_MODAL_OPEN = 'REPO_MODAL_OPEN';
export const openRepoModal = () => ({
  type: REPO_MODAL_OPEN,
  payload: {
    isOpen: true,
  }
});

export const REPO_MODAL_CLOSE = 'REPO_MODAL_CLOSE';
export const closeRepoModal = () => ({
  type: REPO_MODAL_CLOSE,
  payload: {
    isOpen: false,
  }
});
