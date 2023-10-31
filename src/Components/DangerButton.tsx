interface DangerButtonProps {
  onClick: () => void;
}

const DangerButton = ({ onClick }: DangerButtonProps) => {
  return (
    <>
      <button type="button" className="btn btn-danger" onClick={onClick}>
        Danger!
      </button>
    </>
  );
};

export default DangerButton;
