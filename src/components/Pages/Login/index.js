import React from 'react';
import { Button, Modal, CloseButton } from "react-bootstrap";
import InputField from "../../Forms/inputField";
import { useSelector, useDispatch } from 'react-redux'
import { setModal } from '../../../redux/actions/modal'


function Index() {

  const modal = useSelector(state => state.modalState);
  const dispatch = useDispatch();

  const actionModal = () => {
    dispatch(setModal())
  };

  return (
      <div className="row">
        <div className="card d-flex col-10 col-md-6 col-lg-4 ml-auto mr-auto mt-5">
          <div className="card-body justify-content-around">
            <h3 className="font-weight-bolder text-center">Seja bem vindo</h3>
            <div className="form-group">
              <InputField label={"Usuario"} type={"text"}/>
              <InputField label={"Senha"} type={"password"}/>
            </div>
            <a onClick={actionModal}>Requisitar acesso!</a>
            <div className="text-right">
              <Button>Acessar</Button>
            </div>
          </div>
        </div>
        <Modal
          show={modal.status}
          onHide={actionModal}
        >
          <Modal.Header>
            Cadastro
            <CloseButton onClick={actionModal}/>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <InputField label={"Nome"}/>
              <InputField label={"Email"}/>
            </div>
            <div className="mt-3 text-right">
              <Button> Enviar </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
  );
}

export default Index;