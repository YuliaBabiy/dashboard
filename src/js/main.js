import '../scss/style.scss';
import ProgressBar from 'progressbar.js';
import Chart from 'chart.js/auto';


window.onload = () => {
  const sidebarToggle = document.getElementById('sidebar-toggle');

  sidebarToggle.onclick = showSidebar;
}

function showSidebar() {
  const sidebar = document.getElementById('sidebar');

  sidebar.classList.toggle('expanded');
}

const circleProgressConf = {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#333', width: 8 },
  to: { color: '#333', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
};

function createCircleProgressBar(configs = []) {
  configs.forEach(config => {
    const { selector, progress, color, strokeWidth = 8, fontSize = 10 } = config;

    circleProgressConf.from = {
      color,
      width: strokeWidth,
    };
    circleProgressConf.to = {
      color,
      width: strokeWidth,
    };
    circleProgressConf.strokeWidth = strokeWidth;
    circleProgressConf.trailWidth = strokeWidth;

    const progressBar = new ProgressBar.Circle(selector, circleProgressConf);

    progressBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar.text.style.fontSize = `${fontSize}px`;

    progressBar.animate(progress / 100);
  });
}

createCircleProgressBar([
  {
    selector: '#progress-1',
    progress: 58,
    color: 'rgb(89 107 222)'
  }, {
    selector: '#progress-2',
    progress: 19,
    color: 'rgb(219 18 122)'
  }, {
    selector: '#progress-3',
    progress: 75,
    color: 'rgb(255, 197, 7)'
  }, {
    selector: '#progress-4',
    progress: 82,
    color: 'rgb(25 176 25)'
  }, {
    selector: '#progress-5',
    progress: 82,
    color: 'rgb(219 18 122)',
    strokeWidth: 7,
    fontSize: 24,
  }
]);

const lineProgressConf = {
  strokeWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 2,
  svgStyle: {width: '100%', height: '100%'}
}

function createLineProgressBar({ selector, progress, color }) {
  lineProgressConf.color = color;

  const progressLine = new ProgressBar.Line(selector, lineProgressConf);

  progressLine.animate(progress / 100);
}

createLineProgressBar({
  selector: '#progressLine-1',
  progress: 71,
  color: 'rgb(219 18 122)'
});

createLineProgressBar({
  selector: '#progressLine-2',
  progress: 54,
  color: 'rgb(25 176 25)'
});

createLineProgressBar({
  selector: '#progressLine-3',
  progress: 32,
  color: 'rgb(255, 197, 7)'
});

createLineProgressBar({
  selector: '#progressLine-4',
  progress: 89,
  color: 'rgb(89 107 222)'
});

createLineProgressBar({
  selector: '#progressLine-5',
  progress: 32,
  color: 'rgb(255, 197, 7)'
});

const ctx = document.getElementById('chart');
const options = {
  maintainAspectRatio: false,
};

const labels = [];

for (let i = 1; i <= 12; i++) {
  let date = '';

  if (i < 10) {
    date += `0${i}`;
  } else {
    date += `${i}`;
  }

  date += ' Jan';

  labels.push(date);
}

new Chart(ctx, {
  data: {
      datasets: [{
          type: 'bar',
          label: 'Website Blog',
          data: [10, 20, 30, 27, 68, 57, 44, 80, 34, 23, 73, 12]
      }, {
          type: 'line',
          label: 'Social Media',
          data: [15, 25, 28, 40, 35, 32, 88, 76, 45, 21, 44, 23]
      }],
      labels,
  },
  options
});

