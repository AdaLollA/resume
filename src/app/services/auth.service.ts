import {Injectable} from '@angular/core';

import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {TimelineObject} from '../components/timeline/timeline.component';

export enum CmsType {
    SOFT_SKILL = 'Soft Skill',
    HARD_SKILL = 'Hard Skill',
    TEAM = 'Team',
    EDUCATION = 'Education',
    EXPERIENCE = 'Experience',
    AWARD = 'Award',
    PORTFOLIO = 'Portfolio'
}

interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );
    }

    async googleSignIn() {
        const provider = new auth.GoogleAuthProvider();
        console.log('BEFORE POPUP');
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        console.log('AFTER POPUP');
        return this.updateUserData(credential.user);
    }

    async signOut() {
        await this.afAuth.auth.signOut();
        this.user$ = null;
        return this.router.navigate(['/']);
    }

    private updateUserData({uid, email, displayName, photoURL}: User) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

        const data = {
            uid,
            email,
            displayName,
            photoURL
        };

        return userRef.set(data, {merge: true});
    }

    //      |----------------------------------------------------------------------------|
    //      |CRUD https://angular-templates.io/tutorials/about/angular-crud-with-firebase|
    //      |----------------------------------------------------------------------------|

    private typeToCollection(type: CmsType): string {
        switch (type) {
            case CmsType.EDUCATION: {
                return 'education';
            }
            case CmsType.EXPERIENCE: {
                return 'experience';
            }
            case CmsType.AWARD: {
                return 'awards';
            }
        }
    }

    public createTimeLineObject(data: TimelineObject, type: CmsType) {
        return this.afs.collection(this.typeToCollection(type)).add(data);
    }

    deleteTimeLineObject(id: string, type: CmsType) {
        return this.afs.collection(this.typeToCollection(type)).doc(id).delete();
    }

    updateTimeLineObject(data: TimelineObject, type: CmsType) {
        return this.afs.collection(this.typeToCollection(type)).doc(data.id).set(data);
    }
}
