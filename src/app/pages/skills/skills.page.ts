import {Component, OnInit} from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';
import {Chart} from 'chart.js';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.page.html',
    styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
    /*
    public softSkills: ISkill[] = [
      {
        image: 'calendar',
        text: 'organize'
      },
      {
        image: 'ios-people',
        text: 'lead'
      },
      {
        image: 'bulb',
        text: 'understand'
      },
      {
        image: 'flask',
        text: 'analyse'
      }
    ];
    public skills: ISkill[] = [
      {
        image: 'phone-portrait',
        text: 'native'
      },
      {
        image: 'cloud-outline',
        text: 'web'
      },
      {
        image: 'cog',
        text: 'engineer'
      },
      {
        image: 'brush',
        text: 'design'
      }
    ];
    */

    public skills;

    public softChart;
    public hardChart;

    private collectionListener: Observable<any[]>;

    constructor(public menu: MenuStateService,
                public db: AngularFirestore) {
        this.collectionListener = db.collection('skills').valueChanges();
    }

    ngOnInit() {
        this.collectionListener.subscribe(value => {
            this.skills = value;
            console.log(this.skills);
            this.initSoftSkillChart();
            this.initHardSkillChart();
        });
    }

    private initSoftSkillChart() {
        this.softChart = new Chart('soft', {
            type: 'radar',
            data: {
                labels: this.skills[1].labels,
                datasets: [{
                    label: '# of Votes',
                    data: this.skills[1].data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                }
            }
        });
    }

    private initHardSkillChart() {
        this.hardChart = new Chart('hard', {
            type: 'bar',
            data: {
                labels: this.skills[0].labels,
                datasets: [{
                    label: '# of Votes',
                    data: this.skills[0].data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }

}
