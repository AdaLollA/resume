import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {TimelineObject} from '../components/timeline/timeline.component';
import {Observable} from 'rxjs';
import {IProject} from '../components/project-card/project-card.component';
import {ITeamMember} from '../pages/team/team.page';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.page.html',
  styleUrls: ['./cms.page.scss'],
})
export class CmsPage implements OnInit {
  public education: TimelineObject[] = [];
  public experience: TimelineObject[] = [];
  public awards: TimelineObject[] = [];
  public projects: IProject[];
  public team: ITeamMember[] = [];
  public skills;

  private collectionListenerEducation: Observable<any[]>;
  private collectionListenerExperience: Observable<any[]>;
  private collectionListenerAwards: Observable<any[]>;
  private collectionListenerProjects: Observable<any[]>;
  private collectionListenerSkills: Observable<any[]>;
  private collectionListenerTeam: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.collectionListenerEducation = db.collection('education').valueChanges();
    this.collectionListenerExperience = db.collection('experience').valueChanges();
    this.collectionListenerAwards = db.collection('awards').valueChanges();
    this.collectionListenerProjects = db.collection('portfolio').valueChanges();
    this.collectionListenerSkills = db.collection('skills').valueChanges();
    this.collectionListenerTeam = db.collection('team').valueChanges();
  }

  ngOnInit(): void {
    this.collectionListenerEducation.subscribe(value => {
      this.education = value;
      this.education = this.education.sort((a, b) => {return this.dateCompare(a, b)});
    });
    this.collectionListenerExperience.subscribe(value => {
      this.experience = value;
      this.experience = this.experience.sort((a, b) => {return this.dateCompare(a, b)});
    });
    this.collectionListenerAwards.subscribe(value => {
      this.awards = value;
      this.awards = this.awards.sort((a, b) => {return this.dateCompare(a, b)});
    });
    this.collectionListenerProjects.subscribe(value => {
      this.projects = value;
      this.projects = this.projects.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else if (a.date > b.date) {
          return -1;
        } else {
          return 0;
        }
      });
    });
    this.collectionListenerSkills.subscribe(value => {
      this.skills = value;
    });
    this.collectionListenerTeam.subscribe(value => {
      this.team = value;
      this.team = this.team.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        } else if (a.index < b.index) {
          return -1;
        } else {
          return 0;
        }
      });
    });
  }

  dateCompare(a: TimelineObject, b: TimelineObject): number {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  }

}
