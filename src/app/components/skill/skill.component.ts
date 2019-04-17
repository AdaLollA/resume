import {Component, Input, OnInit} from '@angular/core';

export interface ISkill {
  image: string,
  text: string
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input('skill')
  skill: ISkill;
}
