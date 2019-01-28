import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css']
})
export class PostsListsComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private router:Router, private modalService:BsModalService) {  }

  ngOnInit() {
  }

  //opne modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
  addPosts(): void {
    this.router.navigate(['posts-add']);
  };

}
