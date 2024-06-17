import { Component, ViewChild } from '@angular/core';
import { APP_NAME } from '../../constants/global-vars';
import { ModalComponent } from '../modal/modal.component';
import { ModalConfig } from '../modal/modal.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('modal') private modalComponent!: ModalComponent;
  async openModal() {
    return await this.modalComponent.open();
  }
  appName: string = APP_NAME;

  public modalConfig: ModalConfig = {
    modalTitle: "Songs",
    // dismissButtonLabel: string
    closeButtonLabel: "Close",
    disableCloseButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    disableDismissButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    hideCloseButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    hideDismissButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    shouldClose: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    onClose: () => {
      // Add logic for what should happen when the modal closes
      return true;
    },
    shouldDismiss: () => {
      // Add logic to determine if the modal should dismiss
      return true;
    },
    onDismiss: () => {
      // Add logic for what should happen when the modal dismisses
      return true;
    }
  };

}
