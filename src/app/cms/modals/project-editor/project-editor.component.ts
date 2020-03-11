import {Component, Input, OnInit} from '@angular/core';
import {ITeamMember} from '../../../pages/team/team.page';
import {AuthService, CmsType} from '../../../services/auth.service';
import {ModalController} from '@ionic/angular';
import {IProject} from '../../../components/project-card/project-card.component';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.scss'],
})
export class ProjectEditorComponent implements OnInit {

  @Input() data: IProject;
  public modifiedData: IProject;

  public changes: boolean = false;
  public now: Date;
  private type = CmsType.TEAM;

  constructor(public modalCtrl: ModalController, private auth: AuthService) {
  }

  ngOnInit(): void {
    if (this.data) {
      // edit existing data set
      // clone modifiable data so we can react to changes
      this.modifiedData = Object.assign({}, this.data);
    } else {
      // create new data set
      this.modifiedData = {
        img: 'assets/img/image_drop.png',
        name: '',
        profession: '',
        index: 0
      };
    }
  }

  save() {
    if (this.data) {
      // update existing data set
      this.auth.update(this.modifiedData, this.type).then(
          (res) => {
            // no errors
          },
          (err) => {
            console.error(err);
          });
    } else {
      // create new data set
      this.auth.create(this.modifiedData, this.type);
    }
    this.dismiss();
  }

  checkChanges() {
    if (this.modifiedData.img != '' && this.modifiedData.name != '' && this.modifiedData.profession != '' && this.modifiedData.index != undefined) {
      // all fields contain data
      if (this.modifiedData != this.data) {
        // fields have changed from previous data
        this.changes = true;
        return;
      }
    }
    this.changes = false;
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  delete() {
    this.auth.delete(this.data.id, this.type);
    this.dismiss();
  }
}