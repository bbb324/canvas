/**
 * Created by junxie on 12/22/14.
 */

class editer {
  constructor(x, y) {
    this.canvasID = document.getElementById("canvas-id");
    this.canvasCerti = document.getElementById("canvas-certi");
    this.canvasChart = document.getElementById("canvas-chart");

    this.cameraID = document.getElementById('cameraInput-id');
    this.cameraCerti = document.getElementById('cameraInput-certi');
    this.cameraChart = document.getElementById('cameraInput-chart');
    this.state = 'id';
  }
  init() {
    var self = this;
    this.eventRegister();
  }
  

  drawOnCanvas(el, file) {
    var self = this;
    var img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function() {
      el.getContext('2d').drawImage(img, 0,0, el.width, el.height);
    }
  }

    //选择
  setId(el) {
    this.clearActive();
    this.hideTab();
    document.getElementsByClassName('data-show-id')[0].style.display = 'block';
    document.getElementsByClassName('take-pic-id')[0].style.display = 'block';
    el.className = 'active';
    this.state = 'id';
    console.log('id')
  }

  //选择
  setCerti(el) {
    this.clearActive();
    this.hideTab();
    document.getElementsByClassName('data-show-certi')[0].style.display = 'block';
      document.getElementsByClassName('take-pic-certi')[0].style.display = 'block';
    el.className = 'active';
    this.state = 'certi';
    console.log('cert')
  }

    //选择
  setChart(el) {
    this.clearActive();
    this.hideTab();
    document.getElementsByClassName('data-show-chart')[0].style.display = 'block';
    document.getElementsByClassName('take-pic-chart')[0].style.display = 'block';
    el.className = 'active';
    this.state = 'chart';
    console.log('chart')
  }

  hideTab() {
    document.getElementsByClassName('data-show-id')[0].style.display = 'none';
    document.getElementsByClassName('data-show-certi')[0].style.display = 'none';
    document.getElementsByClassName('data-show-chart')[0].style.display = 'none';
    document.getElementsByClassName('take-pic-id')[0].style.display = 'none';
    document.getElementsByClassName('take-pic-chart')[0].style.display = 'none';
    document.getElementsByClassName('take-pic-certi')[0].style.display = 'none';
  }

  clearActive() {
    document.getElementsByClassName('active')[0].classList.remove('active');
  }

  eventRegister() {
    var self = this;
    this.cameraID.addEventListener('change', function(e) {
        document.getElementsByClassName('submit-tips')[0].style.display = 'block';
        setTimeout(function() {
            self.drawOnCanvas(self.canvasID, self.cameraID.files[0]);
            document.getElementsByClassName('submit-tips')[0].style.display = 'none';
            document.getElementsByClassName('canvas-div-id')[0].style.display = 'block';
            self.showTxt();
        }, 1000);
    });
    this.cameraCerti.addEventListener('change', function(e) {
        document.getElementsByClassName('submit-tips')[0].style.display = 'block';
        setTimeout(function() {
            self.drawOnCanvas(self.canvasCerti, self.cameraCerti.files[0]);
            document.getElementsByClassName('submit-tips')[0].style.display = 'none';
            document.getElementsByClassName('canvas-div-certi')[0].style.display = 'block';
            self.showTxt();
        }, 1000);
    });
    this.cameraChart.addEventListener('change', function(e) {
        document.getElementsByClassName('submit-tips')[0].style.display = 'block';
        setTimeout(function() {
            self.drawOnCanvas(self.canvasChart, self.cameraChart.files[0]);
            document.getElementsByClassName('submit-tips')[0].style.display = 'none';
            document.getElementsByClassName('canvas-div-chart')[0].style.display = 'block';
            self.showTxt();
        }, 1000);
    });
    document.getElementsByClassName('nav')[0].addEventListener('click', function(e) {
      switch (e.target.id) {
        case 'id':
        return self.setId(e.target)
        case 'certi':
        return self.setCerti(e.target)
        case 'chart':
        return self.setChart(e.target)
      }
    });

      document.getElementsByClassName('submit-div')[0].addEventListener('click', function(e) {

      });
  }
  showTxt() {
    var self = this;
    console.log(this.state)
    switch (this.state) {
        case 'id':
        return self.setIdTxt()
        case 'certi':
        return self.setCertiTxt()
        case 'chart':
        return self.setChartTxt()
      }
  }
  setIdTxt() {
    document.getElementById('name').value = '王尼玛';
    document.getElementById('num').value = 123456789123485938;
  }
  setCertiTxt() {
    document.getElementById('cert-regi').value = '440306104978713'
    document.getElementById('cert-name').value = '深圳市巡视科技有限公司'
    document.getElementById('cert-person').value = '黎秋伟'
    document.getElementById('cert-time').value = '2010-10-11'
  }
  setChartTxt() {
    document.getElementById('chart-time-s').value = '2016/12/1';
    document.getElementById('chart-time-e').value = '2016/12/31';
    document.getElementById('chart-quota').value = '17273720.23';
    document.getElementById('chart-tax').value = '2936532.24';
    document.getElementById('chart-import-tax').value = '2669621.68';
    document.getElementById('import-tax-export').value = '0';
    document.getElementById('chart-removed').value = '0';
    document.getElementById('chart-shouldbe').value = '266120.56';
  }

}
var _instance = new editer();
_instance.init();

