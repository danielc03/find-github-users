class Github {
    constructor() {
        this.client_id = '0bc4e566dcb9f88d5ee4';
        this.client_secret = 'd78a7a85e21c5166df31431ca2acae5ab89b07cb';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}