import {Component, OnInit} from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';
import {Chart} from 'chart.js';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {SeoService} from '../../services/seo.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.page.html',
    styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
    public skills;
    public softChart;
    public hardChart;

    private collectionListener: Observable<any[]>;

    constructor(public menu: MenuStateService,
                public db: AngularFirestore,
                public seo: SeoService) {
        this.collectionListener = db.collection('skills').valueChanges();
        seo.update('Skills', 'See the skills i have learned over the many years of practical and educational experience.');
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
                    data: this.skills[1].data,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'SOFT',
                    padding: 20,
                    fontSize: 24,
                    position: 'bottom'
                },
                maintainAspectRatio: false,
                aspectRatio: 1,
                scale: {
                    ticks: {
                        display: false,
                        max: 10,
                        min: 0,
                        stepSize: 2
                    },
                    angleLines: { color: '#a2a3a5' },
                    gridLines: { color: '#a2a3a5' }
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
                    label: 'Skill Level',
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
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'HARD',
                    padding: 30,
                    fontSize: 24
                },
                scales: {
                    yAxes: [{
                        display: false, // hides axis visually but keeps min and max
                        ticks: {
                            min: 0,
                            max: 10,
                            stepSize: 2
                        },
                        gridLines: { color: '#a2a3a5' },
                        angleLines: { color: '#a2a3a5' }
                    }]
                },
                maintainAspectRatio: false,
                aspectRatio: 1,
                layout: {
                    padding: {
                        left: 35,
                        right: 35,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    }

}
