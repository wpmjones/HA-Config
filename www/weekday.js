class WeekdayContentCard extends HTMLElement {

  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = `${hass.states['sensor.day_of_week'].state`;
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      card.appendChild(this.content);
      this.appendChild(card);
    }

    this.content.innerHTML = `
      Here are your cleaning tasks for ${hass.states['sensor.day_of_week'].state}!
      <img src="http://via.placeholder.com/350x150">
    `;
  }

}

customElements.define('weekday', WeekdayContentCard);
