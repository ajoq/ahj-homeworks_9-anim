import Collapse from './Collapse';
import ChatWidget from './ChatWidget';

const collapse = new Collapse();
collapse.init();

const divWidget = document.querySelector('.chat-widget');
const chatWidget = new ChatWidget(divWidget);
chatWidget.init();
