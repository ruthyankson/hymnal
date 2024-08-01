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
  /**
   * ViewChild reference to the modal component.
   * This is used to interact with the modal dialog in the template.
   */
  @ViewChild('modal') private modalComponent!: ModalComponent;

  /**
   * Opens the modal asynchronously.
   *
   * @return {Promise<boolean>} A promise that resolves to true if the modal is opened successfully.
   */
  async openModal() {
    return await this.modalComponent.open();
  }

  // Application Name
  appName: string = APP_NAME;

  public modalConfig: ModalConfig = {
    // Modal Title
    modalTitle: "",
    // Close Button Label
    closeButtonLabel: "x",
    /**
     * Determines if the modal should close.
     *
     * @return {boolean} Returns true if the modal should close, false otherwise.
     */
    disableCloseButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    /**
     * Determines if the modal should be disabled for dismissing.
     *
     * @return {boolean} Returns true if the modal should be disabled for dismissing, false otherwise.
     */
    disableDismissButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    /**
     * Determines if the modal should hide the close button.
     *
     * @return {boolean} Returns true if the modal should hide the close button, false otherwise.
     */
    hideCloseButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    /**
     * Determines if the modal should hide the dismiss button.
     *
     * @return {boolean} Returns true if the modal should hide the dismiss button, false otherwise.
     */
    hideDismissButton: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    /**
     * Determines if the modal should close.
     *
     * @return {boolean} Returns true if the modal should close, false otherwise.
     */
    shouldClose: () => {
      // Add logic to determine if the modal should close
      return true;
    },
    /**
     * A callback function that is called when the modal closes.
     *
     * @return {boolean} Returns true if the modal should close, false otherwise.
     */
    onClose: () => {
      // Add logic for what should happen when the modal closes
      return true;
    },
    /**
     * Determines if the modal should dismiss.
     *
     * @return {boolean} Returns true if the modal should dismiss, false otherwise.
     */
    shouldDismiss: () => {
      // Add logic to determine if the modal should dismiss
      return false;
    },
    /**
     * A callback function that is called when the modal is dismissed.
     *
     * @return {boolean} Returns true if the modal should dismiss, false otherwise.
     */
    onDismiss: () => {
      // Add logic for what should happen when the modal dismisses
      return false;
    },
    hideHeader: false,
    hideFooter: true
  };

}
