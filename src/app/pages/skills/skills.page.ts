import { Component, OnInit } from '@angular/core';
import {ISkill} from '../../components/skill/skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  private softSkills: ISkill[] = [
    {
      image: 'cloud',
      text: ' cuberino'
    },
    {
      image: 'cloud',
      text: ' cuberino'
    },
    {
      image: 'cloud',
      text: ' cuberino'
    },
    {
      image: 'cloud',
      text: ' cuberino'
    }
  ];
  private hardSkills: ISkill[] = [
    {
      image: 'cube',
      text: ' cuberino'
    },
    {
      image: 'cube',
      text: ' cuberino'
    },
    {
      image: 'cube',
      text: ' cuberino'
    },
    {
      image: 'cube',
      text: ' cuberino'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
