(function () {
  const confirm18 = document.getElementById('confirm18');
  const confirmLaw = document.getElementById('confirmLaw');
  const startBtn = document.getElementById('startBtn');
  const ageGate = document.getElementById('age-gate');
  const quiz = document.getElementById('quiz');
  const result = document.getElementById('result');

  function updateStartBtn() {
    startBtn.disabled = !(confirm18.checked && confirmLaw.checked);
  }

  confirm18.addEventListener('change', updateStartBtn);
  confirmLaw.addEventListener('change', updateStartBtn);

  startBtn.addEventListener('click', () => {
    if (startBtn.disabled) return;
    ageGate.classList.add('hidden');
    quiz.classList.remove('hidden');
    window.scrollTo({ top: quiz.offsetTop - 10, behavior: 'smooth' });
  });

  quiz.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(quiz);
    const use = form.get('use');
    const goal = form.get('goal');
    const rx = form.get('rx');
    const risk = form.get('risk');
    const help = form.get('help');

    if (!use || !goal || !rx || !risk || !help) {
      alert('请完整回答所有问题');
      return;
    }

    const blocks = [];

    // Compliance
    if (rx !== 'yes') {
      blocks.push(section('合规提示', `在澳大利亚，含尼古丁电子烟通常需要医生处方方可合法获得。建议咨询全科医生（GP）或合规药房渠道。`));
    } else {
      blocks.push(section('合规提示', `你已表明持有处方。请仅通过合规渠道按医嘱获取，并留意各州/领地的额外规定。`));
    }

    // Risk education
    if (risk === 'low' || goal === 'recreation') {
      blocks.push(section('健康风险教育', `电子烟并非无风险：尼古丁可致成瘾，可能影响心肺系统与口腔健康。避免出于好奇或娱乐使用，尽量减少并考虑停止尼古丁暴露。`));
    } else {
      blocks.push(section('健康风险教育', `保持对风险的关注：即使用于戒烟，仍建议在医生指导下使用循证方案，并尽量降低总尼古丁摄入。`));
    }

    // Harm reduction / quitting
    if (goal === 'quit' || use === 'cigarette' || use === 'both') {
      blocks.push(section('戒烟/减害支持', `可与医生讨论尼古丁替代疗法（贴片、口香糖、含片等）或处方药（如伐尼克兰等），并结合行为干预（计划、触发管理、支持网络）。`));
    }

    // Help preferences
    switch (help) {
      case 'law':
        blocks.push(section('法规与资源', resourcesLaw()));
        break;
      case 'quit':
        blocks.push(section('戒烟资源', resourcesQuit()));
        break;
      case 'health':
        blocks.push(section('科普资源', resourcesHealth()));
        break;
      case 'doctor':
        blocks.push(section('就医沟通清单', doctorChecklist()));
        break;
    }

    // Universal reminder
    blocks.push(section('温馨提醒', `请尽量减少并考虑停止尼古丁使用。若出现不适或依赖问题，请及时就医。`));

    result.innerHTML = blocks.join('\n');
    result.classList.remove('hidden');
    window.scrollTo({ top: result.offsetTop - 10, behavior: 'smooth' });
  });

  function section(title, content) {
    return `<div class="result-block"><h3>${title}</h3><div>${content}</div></div>`;
  }

  function resourcesLaw() {
    return `
      <ul>
        <li>澳洲 TGA：<a class="link" href="https://www.tga.gov.au" target="_blank" rel="noopener">tga.gov.au</a></li>
        <li>Healthdirect：<a class="link" href="https://www.healthdirect.gov.au/vaping" target="_blank" rel="noopener">healthdirect.gov.au/vaping</a></li>
        <li>各州/领地卫生部门公告与药房合规信息</li>
      </ul>`;
  }
  function resourcesQuit() {
    return `
      <ul>
        <li>Quitline 戒烟热线 13 7848（13 QUIT）：<a class="link" href="https://www.quit.org.au" target="_blank" rel="noopener">quit.org.au</a></li>
        <li>行为支持：制定戒烟日期、识别诱因、寻求家友支持</li>
        <li>与医生讨论：NRT、处方药与随访计划</li>
      </ul>`;
  }
  function resourcesHealth() {
    return `
      <ul>
        <li>风险概览：尼古丁可成瘾；电子烟气溶胶可能含刺激性化学物；对非吸烟者不建议使用</li>
        <li>权威信息：<a class="link" href="https://www.health.gov.au/our-work/vaping" target="_blank" rel="noopener">澳政府卫生部</a></li>
      </ul>`;
  }
  function doctorChecklist() {
    return `
      <ul>
        <li>当前使用史（频率、触发、既往尝试）</li>
        <li>健康史（心肺、心理健康、药物过敏）</li>
        <li>戒烟目标与时间表</li>
        <li>是否考虑行为支持与随访</li>
      </ul>`;
  }
})();
