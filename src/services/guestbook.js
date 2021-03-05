/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-template */
class Guestbook {
    constructor() {
        this.messages = this.element('recent-messages');
        this.container = this.element('new-message');
        this.nextButton = this.element('next-step-button');
        this.contentField = this.element('message-content');
        this.nameField = this.element('message-name');
        this.emailField = this.element('message-email');
        this.URLField = this.element('message-url');
    }
    init() {
        if (!this.messages) return;

        this.GET(xhr => {
            if (xhr.status === 200 || xhr.status === 201) {
                this.render(JSON.parse(xhr.responseText));
                this.messages.parentNode.classList += ' fetched';
            } else console.error('Failed to load messages');
        });
    }
    render(items) {
        items.forEach(item => this.messages.insertAdjacentHTML('beforeend', this.template(item)));
    }
    template(item) {
        return `<div class="message">
					<header>
						<img src="${item.avatar || '?'}" />
						<h3>${item.name}</h3>
					</header>
					<div class="message-content">
						<p>${item.content}</p>
					</div>
				</div>`;
    }
    element(id) {
        return document.getElementById(id);
    }
    next() {
        this.container.className = 'second-step';
    }
    post(button) {
        const data = {
            post: 1008,
            content: this.contentField.value,
            author_name: this.nameField.value,
            author_email: this.emailField.value,
            author_url: this.URLField.value,
            author_user_agent: navigator.userAgent + ' DWAPI/7.0',
        };

        const re = /\S+@\S+\.\S+/;
        if (data.author_email.length > 0 && !re.test(data.author_email)) {
            console.info('Todo: handle invalid email address');
            return;
        }

        button.className = 'posting';
        button.innerHTML = '';

        this.POST(data, xhr => {
            if (xhr.status === 200 || xhr.status === 201)  return this.messageDidPost();
            return 'Please try again later';
        });
    }
    contentDidChange(e) {
        this.nextButton.className = e.value.length < 5 ? 'inactive' : '';
    }
    messageDidPost() {
        this.container.className = 'third-step';
    }
    request(path, method, payload, callback) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && callback) callback(xhr);
        };
        xhr.open(method, 'https://blog.dandyweng.com/wp-json/wp/v2/' + path, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(payload));
    }
    GET(callback) {
        this.request('homepage-comment', 'GET', null, callback);
    }
    POST(payload, callback) {
        this.request('comments', 'POST', payload, callback);
    }
}
