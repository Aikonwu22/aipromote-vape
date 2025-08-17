(function () {
  const i18n = {
    zh: {
      title: '澳洲电子烟合规与风险自测（18+）',
      subtitle: '法律与健康风险提示：本工具不提供品牌推荐，不比较口味或尼古丁含量，仅用于合规与风险教育。',
      ageTitle: '年龄与合规确认',
      preface: '使用本工具前请确认：',
      age1: '我已年满 18 岁；',
      age2: '我理解澳大利亚对含尼古丁电子烟实行处方制度（需医生处方）。',
      start: '开始 5 题自测',
      legal: '法律参考：Therapeutic Goods Administration (TGA) 对尼古丁电子烟的处方与供应要求。此工具不提供医疗建议。',
      qTitle: '五个问题',
      q1: '你当前是否在使用任何烟草或尼古丁制品？',
      q1o: ['请选择', '否，从不使用', '是，传统香烟', '是，电子烟', '是，两者都使用'],
      q2: '你使用尼古丁的主要目的是什么？',
      q2o: ['请选择', '戒烟/减少危害', '娱乐/尝试', '缓解压力', '其他'],
      q3: '你是否持有医生为含尼古丁电子烟开具的有效处方？',
      q3o: ['请选择', '是', '否/不确定'],
      q4: '你对电子烟潜在健康风险（如尼古丁成瘾、心肺风险、口腔与牙周问题等）的了解程度？',
      q4o: ['请选择', '了解较少', '一般了解', '充分了解'],
      q5: '你更希望获得哪类帮助？',
      q5o: ['请选择', '澳洲法规与合规说明', '戒烟/减害与行为支持', '健康风险科普', '与医生沟通准备清单'],
      submit: '提交并查看建议',
      foot: '重要声明：本工具不推荐电子烟品牌、不比较口味或尼古丁含量。若你未成年或无处方，请不要使用含尼古丁产品。',
      s_compliance_need_rx: '在澳大利亚，含尼古丁电子烟通常需要医生处方方可合法获得。建议咨询全科医生（GP）或合规药房渠道。',
      s_compliance_has_rx: '你已表明持有处方。请仅通过合规渠道按医嘱获取，并留意各州/领地的额外规定。',
      s_risk_strong: '电子烟并非无风险：尼古丁可致成瘾，可能影响心肺系统与口腔健康。避免出于好奇或娱乐使用，尽量减少并考虑停止尼古丁暴露。',
      s_risk_general: '保持对风险的关注：即使用于戒烟，仍建议在医生指导下使用循证方案，并尽量降低总尼古丁摄入。',
      s_quit: '可与医生讨论尼古丁替代疗法（贴片、口香糖、含片等）或处方药（如伐尼克兰等），并结合行为干预（计划、触发管理、支持网络）。',
      s_help_law: '法规与资源',
      s_help_quit: '戒烟资源',
      s_help_health: '科普资源',
      s_help_doctor: '就医沟通清单',
      s_reminder: '请尽量减少并考虑停止尼古丁使用。若出现不适或依赖问题，请及时就医。',
      b_resourcesLaw: '澳洲 TGA',
      b_healthdirect: 'Healthdirect',
      b_govhealth: '澳政府卫生部',
      btn_lang: 'English'
    },
    en: {
      title: 'Australia Vaping Compliance & Risk Self-check (18+)',
      subtitle: 'Legal and health risk notice: This tool does not recommend brands or compare nicotine levels/flavours. Education only.',
      ageTitle: 'Age and Compliance Confirmation',
      preface: 'Before using this tool, please confirm:',
      age1: 'I am 18+ years old;',
      age2: 'I understand nicotine vaping products in Australia generally require a doctor’s prescription.',
      start: 'Start 5-Question Check',
      legal: 'Reference: TGA requirements for prescription and supply of nicotine vaping products. This tool is not medical advice.',
      qTitle: 'Five Questions',
      q1: 'Are you currently using any tobacco or nicotine products?',
      q1o: ['Please select', 'No, never', 'Yes, cigarettes', 'Yes, vaping', 'Yes, both'],
      q2: 'What is your primary purpose for nicotine use?',
      q2o: ['Please select', 'Quitting/reduction', 'Recreational/curiosity', 'Stress relief', 'Other'],
      q3: 'Do you have a valid doctor’s prescription for nicotine vaping products?',
      q3o: ['Please select', 'Yes', 'No/unsure'],
      q4: 'How familiar are you with potential health risks (addiction, cardiopulmonary, oral/periodontal issues)?',
      q4o: ['Please select', 'Limited', 'Some', 'Well-informed'],
      q5: 'What type of help do you prefer?',
      q5o: ['Please select', 'Australian laws & compliance', 'Quitting/harm reduction & behavioural support', 'Health risk education', 'Doctor visit checklist'],
      submit: 'Submit and view advice',
      foot: 'Important: No brand recommendations or comparisons of flavours/nicotine levels. If underage or without prescription, do not use nicotine products.',
      s_compliance_need_rx: 'In Australia, nicotine vaping products generally require a doctor’s prescription. Consider seeing a GP or compliant pharmacy.',
      s_compliance_has_rx: 'You indicated you have a prescription. Use compliant channels as directed by your doctor and check state/territory rules.',
      s_risk_strong: 'Vaping is not risk-free: nicotine is addictive and may impact heart/lung and oral health. Avoid recreational use; consider reducing and stopping.',
      s_risk_general: 'Stay mindful of risks: even for quitting, use evidence-based options under medical guidance and aim to reduce total nicotine intake.',
      s_quit: 'Discuss NRT (patches, gum, lozenges) or prescription medicines (e.g., varenicline) with your doctor, plus behavioural supports.',
      s_help_law: 'Laws & resources',
      s_help_quit: 'Quit resources',
      s_help_health: 'Education resources',
      s_help_doctor: 'Doctor checklist',
      s_reminder: 'Please reduce and consider stopping nicotine use. Seek medical help if you experience dependence or adverse effects.',
      b_resourcesLaw: 'TGA',
      b_healthdirect: 'Healthdirect',
      b_govhealth: 'Australian Dept of Health',
      btn_lang: '中文'
    }
  };
  let lang = 'zh';
  const langToggle = document.getElementById('langToggle');
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
  function t() { return i18n[lang]; }
  function renderLang() {
    document.title = t().title;
    document.querySelector('header h1').textContent = t().title;
    document.querySelector('.subtitle').textContent = t().subtitle;
    langToggle.textContent = t().btn_lang;
    document.querySelector('#age-gate h2').textContent = t().ageTitle;
    document.querySelector('#age-gate p').textContent = t().preface;
    const lis = document.querySelectorAll('#age-gate ul li');
    lis[0].textContent = t().age1;
    lis[1].textContent = t().age2;
    document.getElementById('startBtn').textContent = t().start;
    document.querySelector('#age-gate .legal').textContent = t().legal;

    document.querySelector('#quiz h2').textContent = t().qTitle;
    const selects = document.querySelectorAll('#quiz select');
    // q1
    document.querySelectorAll('#quiz ol li')[0].querySelector('label').textContent = t().q1;
    setOptions(selects[0], t().q1o);
    // q2
    document.querySelectorAll('#quiz ol li')[1].querySelector('label').textContent = t().q2;
    setOptions(selects[1], t().q2o);
    // q3
    document.querySelectorAll('#quiz ol li')[2].querySelector('label').textContent = t().q3;
    setOptions(selects[2], t().q3o);
    // q4
    document.querySelectorAll('#quiz ol li')[3].querySelector('label').textContent = t().q4;
    setOptions(selects[3], t().q4o);
    // q5
    document.querySelectorAll('#quiz ol li')[4].querySelector('label').textContent = t().q5;
    setOptions(selects[4], t().q5o);

    document.querySelector('#quiz button[type="submit"]').textContent = t().submit;
    document.querySelector('footer p').textContent = t().foot;
  }
  function setOptions(select, arr) {
    const current = select.value;
    select.innerHTML = '';
    arr.forEach((txt, i) => {
      const opt = document.createElement('option');
      opt.value = i === 0 ? '' : String(i);
      opt.textContent = txt;
      select.appendChild(opt);
    });
    // try to keep previous if still valid
    const found = Array.from(select.options).some(o => o.value === current);
    if (found) select.value = current;
  }

  langToggle.addEventListener('click', () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    renderLang();
  });

  // initial render
  renderLang();
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
      alert(lang === 'zh' ? '请完整回答所有问题' : 'Please complete all questions');
      return;
    }

    const blocks = [];

    // Compliance
    if (!(rx === '1')) {
      blocks.push(section(lang === 'zh' ? '合规提示' : 'Compliance advice', lang === 'zh' ? t().s_compliance_need_rx : t().s_compliance_need_rx));
    } else {
      blocks.push(section(lang === 'zh' ? '合规提示' : 'Compliance advice', lang === 'zh' ? t().s_compliance_has_rx : t().s_compliance_has_rx));
    }

    // Risk education
    // risk values after i18n become 1..n strings
    if (risk === '1' || goal === '2') {
      blocks.push(section(lang === 'zh' ? '健康风险教育' : 'Health risk education', lang === 'zh' ? t().s_risk_strong : t().s_risk_strong));
    } else {
      blocks.push(section(lang === 'zh' ? '健康风险教育' : 'Health risk education', lang === 'zh' ? t().s_risk_general : t().s_risk_general));
    }

    // Harm reduction / quitting
    if (goal === '1' || use === '2' || use === '4') {
      blocks.push(section(lang === 'zh' ? '戒烟/减害支持' : 'Quitting/Harm reduction', lang === 'zh' ? t().s_quit : t().s_quit));
    }

    // Help preferences
    switch (help) {
      case '1':
        blocks.push(section(lang === 'zh' ? t().s_help_law : t().s_help_law, resourcesLaw()));
        break;
      case '2':
        blocks.push(section(lang === 'zh' ? t().s_help_quit : t().s_help_quit, resourcesQuit()));
        break;
      case '3':
        blocks.push(section(lang === 'zh' ? t().s_help_health : t().s_help_health, resourcesHealth()));
        break;
      case '4':
        blocks.push(section(lang === 'zh' ? t().s_help_doctor : t().s_help_doctor, doctorChecklist()));
        break;
    }

    // Universal reminder
    blocks.push(section(lang === 'zh' ? '温馨提醒' : 'Reminder', t().s_reminder));

    result.innerHTML = blocks.join('\n');
    result.classList.remove('hidden');
    window.scrollTo({ top: result.offsetTop - 10, behavior: 'smooth' });
  });

  function section(title, content) {
    return `<div class="result-block"><h3>${title}</h3><div>${content}</div></div>`;
  }

  function resourcesLaw() {
    if (lang === 'zh') {
      return `
      <ul>
        <li>澳洲 TGA：<a class="link" href="https://www.tga.gov.au" target="_blank" rel="noopener">tga.gov.au</a></li>
        <li>Healthdirect：<a class="link" href="https://www.healthdirect.gov.au/vaping" target="_blank" rel="noopener">healthdirect.gov.au/vaping</a></li>
        <li>各州/领地卫生部门公告与药房合规信息</li>
      </ul>`;
    }
    return `
      <ul>
        <li>TGA: <a class="link" href="https://www.tga.gov.au" target="_blank" rel="noopener">tga.gov.au</a></li>
        <li>Healthdirect: <a class="link" href="https://www.healthdirect.gov.au/vaping" target="_blank" rel="noopener">healthdirect.gov.au/vaping</a></li>
        <li>State/territory health department notices and compliant pharmacies</li>
      </ul>`;
  }
  function resourcesQuit() {
    if (lang === 'zh') {
      return `
      <ul>
        <li>Quitline 戒烟热线 13 7848（13 QUIT）：<a class="link" href="https://www.quit.org.au" target="_blank" rel="noopener">quit.org.au</a></li>
        <li>行为支持：制定戒烟日期、识别诱因、寻求家友支持</li>
        <li>与医生讨论：NRT、处方药与随访计划</li>
      </ul>`;
    }
    return `
      <ul>
        <li>Quitline 13 7848 (13 QUIT): <a class="link" href="https://www.quit.org.au" target="_blank" rel="noopener">quit.org.au</a></li>
        <li>Behavioural supports: set quit date, identify triggers, social support</li>
        <li>Discuss with GP: NRT, prescriptions, follow-up plan</li>
      </ul>`;
  }
  function resourcesHealth() {
    if (lang === 'zh') {
      return `
      <ul>
        <li>风险概览：尼古丁可成瘾；电子烟气溶胶可能含刺激性化学物；对非吸烟者不建议使用</li>
        <li>权威信息：<a class="link" href="https://www.health.gov.au/our-work/vaping" target="_blank" rel="noopener">澳政府卫生部</a></li>
      </ul>`;
    }
    return `
      <ul>
        <li>Risk overview: nicotine is addictive; aerosols may contain irritants; not recommended for non-smokers</li>
        <li>Official info: <a class="link" href="https://www.health.gov.au/our-work/vaping" target="_blank" rel="noopener">Australian Dept of Health</a></li>
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
