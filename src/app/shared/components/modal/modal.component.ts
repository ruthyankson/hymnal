import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { ModalConfig } from './modal.config'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
@Injectable()
export class ModalComponent {
  // Modal Configuration input
  @Input() public modalConfig!: ModalConfig;
  /**
   * ViewChild reference to the modal content template.
   * This is used to reference the content of the modal dialog.
   */
  @ViewChild('modal') private modalContent!: TemplateRef<ModalComponent>;

  /**
   * Reference to the active modal instance.
   * This is used to manage the state of the modal dialog, such as opening and closing it.
   */
  private modalRef!: NgbModalRef;


  constructor(private modalService: NgbModal) { }

  /**
   * Opens the modal dialog.
   *
   * @return {Promise<boolean>} A promise that resolves when the modal is closed or dismissed.
   */
  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent);
      this.modalRef.result.then(resolve, resolve);
    });
  }

  /**
   * Closes the modal dialog.
   *
   * This method checks if the modal can be closed by evaluating the shouldClose condition.
   * If allowed, it triggers the onClose event and closes the modal.
   *
   * @return {Promise<void>} A promise that resolves when the modal is closed.
   */
  async close(): Promise<void> {
    if (this.modalConfig.shouldClose === undefined || (await this.modalConfig.shouldClose())) {
      const result = this.modalConfig.onClose === undefined || (await this.modalConfig.onClose());
      this.modalRef.close(result);
    }
  }

  /**
   * Dismisses the modal dialog.
   *
   * This method checks if the modal can be dismissed by evaluating the shouldDismiss condition.
   * If allowed, it triggers the onDismiss event and dismisses the modal.
   *
   * @return {Promise<void>} A promise that resolves when the modal is dismissed.
   */
  async dismiss(): Promise<void> {
    if (this.modalConfig.shouldDismiss === undefined || (await this.modalConfig.shouldDismiss())) {
      const result = this.modalConfig.onDismiss === undefined || (await this.modalConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }

}
