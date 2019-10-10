import React, { useMemo } from 'react';
import { Button, Modal, ModalBody } from "react-bootstrap";
import InputField from "../../Forms/inputField";
import { useSelector, useDispatch } from 'react-redux'
import { setModal } from '../../../redux/actions/modal'


function Index() {

  const modal = useSelector(state => state.modalState);
  const dispatch = useDispatch();

  const actionModal = () => {
    dispatch(setModal())
  };

  console.log(modal);

  return (
      <div className="row">
        <div className="card d-flex col-10 col-md-6 col-lg-4 ml-auto mr-auto mt-5">
          <div className="card-body justify-content-around">
            <h3 className="font-weight-bolder text-center">Seja bem vindo</h3>
            <div className="form-group">
              <InputField label={"Usuario"} type={"text"}/>
              <InputField label={"Senha"} type={"password"}/>
            </div>
            <Button onClick={actionModal}>Requisitar acesso!</Button>
            <div className="text-right">
              <Button>Acessar</Button>
            </div>
          </div>
        </div>
        <Modal show={modal.status} onHide={actionModal}>
          <ModalBody>
            <InputField label={"Nome"}/>
          </ModalBody>
        </Modal>
      </div>
  );
}

export default Index;