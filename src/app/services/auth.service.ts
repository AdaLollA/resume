import {Injectable} from '@angular/core';

import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {TimelineObject} from '../components/timeline/timeline.component';

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

    createAward({title,content,date,year}: TimelineObject) {
        return this.afs.collection('awards').add({
            title,
            content,
            date,
            year
        });
    }

    /*
    createUser(value, avatar) {
        return this.afs.collection('users').add({
            name: value.name,
            nameToSearch: value.name.toLowerCase(),
            surname: value.surname,
            age: parseInt(value.age),
            avatar: avatar
        });
    }

    updateUser(userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.afs.collection('users').doc(userKey).set(value);
    }

    deleteUser(userKey) {
        return this.afs.collection('users').doc(userKey).delete();
    }
    */
}
