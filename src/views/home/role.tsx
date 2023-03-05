import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

type RoleSelectionProps = {
  show: boolean;
  onHide: () => void;
};

enum Role {
  Freelancer = "freelancer",
  Employee = "employee",
}

const RoleSelectionModal: React.FC<RoleSelectionProps> = ({ show, onHide }) => {
  const [selectedRole, setSelectedRole] = useState<Role>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectedRole);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Select your role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Check
            type="radio"
            label="Freelancer"
            name="role"
            value={Role.Freelancer}
            checked={selectedRole === Role.Freelancer}
            onChange={(event) => setSelectedRole(event.target.value as Role)}
          />
          <Form.Check
            type="radio"
            label="Employee"
            name="role"
            value={Role.Employee}
            checked={selectedRole === Role.Employee}
            onChange={(event) => setSelectedRole(event.target.value as Role)}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RoleSelectionModal;