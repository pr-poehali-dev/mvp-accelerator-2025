import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">MVPs Lab</div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="https://www.notion.so/2ceaa51b9f74809cb267fd79d0e65f97" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent transition-colors">
              Концепция разработки
            </a>
            <a href="https://www.notion.so/2-2d7aa51b9f7480fc8d5cd5d7b2bcb52a" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent transition-colors">
              Как создавать продукты
            </a>
            <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
              <a href="https://t.me/AndreyChicherov" target="_blank" rel="noopener noreferrer">
                Консультация
              </a>
            </Button>
          </nav>

        </div>
      </header>

      <main className="pt-20">
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                Cоздайте международный IT-стартап за 12 недель
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Без раскачки. С вашим бюджетом. От идеи до первых платящих клиентов.
              </p>
              <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-lg md:text-xl font-medium text-foreground">
                  <span className="text-accent font-bold">50%</span> наших стартапов выходят на окупаемость. 
                  Остальные привлекают инвесторов в <span className="text-accent font-bold">10 раз выгоднее</span> благодаря нашей методологии.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="https://t.me/AndreyChicherov" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Записаться на консультацию
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
              4 боли фаундеров, которые мы решаем
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 border-2 border-gray-200 hover:border-accent transition-all hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="UserX" className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Нет технического кофаундера</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Есть классная идея и даже прототип? Классические студии запрашивают $150K. 
                  Фрилансеры — не могут реализовать. Или ищешь технического специалиста и отдаешь ему 50% доли.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-accent transition-all hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingDown" className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Маркетинг дороже прибыли</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Яндекс.Директ — $3K/месяц. Твой доход — $500. Мы создали рекламные каналы которые работают в России 
                  и на международных рынках дешевле классических инструментов в <span className="font-semibold text-accent">10-30 раз</span> и 
                  активно используем их в работе для быстрого выхода на окупаемость проектов.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-accent transition-all hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Гипотезы проверяют вслепую</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Студия реализует все 10 идей, что вы им принесете, даже если 9 из них убыточны. Результат — переписывание кода. 
                  Мы используем методологию Advanced AJTBD усиленную AI-платформой нашей разработки, с помощью которой мы 
                  быстрее и качественнее фильтруем идеи ДО разработки и проверяем востребованность продукта.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-accent transition-all hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Инвесторы требуют доказательства</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Питч без трекшена не работает. Нужны: первые клиенты, реальная аналитика, работающая юнит-экономика. 
                  У нас инвесторы сами выстраиваются в очередь, так как успешный продукт всегда состоит из: 
                  идеи + экспертизы (вы), технической реализации + продуктово-маркетинговой реализации (MVPs Lab) + минимального бюджета (вы или инвестор).
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              3 ключевых преимущества MVPs LAB
            </h2>
            <p className="text-center text-muted-foreground mb-16">Наши решения ваших проблем</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-white border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Zap" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">MVPs_Lab AI-Platform</h3>
                <p className="text-sm text-muted-foreground mb-6">Вместо технического кофаундера</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>MVP за <span className="font-semibold text-foreground">4-8 недель</span> (vs 6+ месяцев в студии)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>на <span className="font-semibold text-accent">70%+ дешевле</span> классических решений</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Enterprise-архитектура для миллионов юзеров</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span><span className="font-semibold text-foreground">100% код и права</span> остаются у вас</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Target" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Advanced AJTBD</h3>
                <p className="text-sm text-muted-foreground mb-6">Гипотезы вместо интуиции</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span><span className="font-semibold text-accent">90%+</span> проверок гипотез делаем перед технической реализацией</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Экономия <span className="font-semibold text-foreground">1-3+ млн. ₽</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Безжалостный фильтр идей, только то, что нужно для запуска MVP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>В <span className="font-semibold text-accent">10-100 раз</span> ускоренные итерации проверок</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="DollarSign" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Growth & Окупаемость</h3>
                <p className="text-sm text-muted-foreground mb-6">Деньги вместо теории</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Трафик в <span className="font-semibold text-accent">10-30x дешевле</span> Яндекса/Facebook</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Или вовсе беззатратные каналы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Первые платящие клиенты за <span className="font-semibold text-foreground">3 месяца</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span><span className="font-semibold text-accent">50%</span> наших стартапов выходят на окупаемость</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>



        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Примеры проектов первого потока
            </h2>
            <p className="text-center text-muted-foreground mb-16">10 проектов запущенных в ноябре-декабре 2025</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-white border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon name="Building2" className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Enterprise & B2B</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Truck" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Транспортная безопасность</p>
                      <p className="text-sm text-muted-foreground">Система мониторинга тысяч единиц транспорта</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Briefcase" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Корпоративные экосистемы</p>
                      <p className="text-sm text-muted-foreground">CRM, ERP, документооборот с миграцией из legacy-систем</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Icon name="GraduationCap" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">EdTech & Streaming</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="BookOpen" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Онлайн-школа</p>
                      <p className="text-sm text-muted-foreground">Создание интерактивных уроков и досок, авто-проверка заданий</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Play" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Детский видеохостинг</p>
                      <p className="text-sm text-muted-foreground">Безопасный аналог YouTube Kids с AI-модерацией контента</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Icon name="ShoppingCart" className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">FinTech & E-commerce</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Gavel" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Онлайн-биржа аукционов</p>
                      <p className="text-sm text-muted-foreground">Торги в реальном времени, рейтинги, аналитика</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Wallet" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">AI-финансовый консультант</p>
                      <p className="text-sm text-muted-foreground">Мобильное приложение для управления личным бюджетом</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Icon name="Bot" className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">AI Tools & SaaS</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Image" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">SaaS фото-процессинг</p>
                      <p className="text-sm text-muted-foreground">Авто-обработка тысяч фото, удаление фона, фильтры</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="FileText" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Notebook LM для корпораций</p>
                      <p className="text-sm text-muted-foreground">Автоматизация рутины при работе с данными с точностью от 90%+</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Команда
            </h2>
            <p className="text-center text-muted-foreground mb-16">+ еще 10 привлекаемых менторов</p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="overflow-hidden bg-white border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <img 
                    src="https://cdn.poehali.dev/files/generated-image (42).jpg" 
                    alt="Руслан Успенов" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Руслан Успенов</h3>
                    <p className="text-accent font-semibold">CTO</p>
                  </div>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>Руководитель MVPs_Lab AI-платформы по генерации чистого кода</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>10+ лет IT-разработки в международных корпорациях</span>
                    </li>

                  </ul>
                </div>
              </Card>

              <Card className="overflow-hidden bg-white border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <img 
                    src="https://cdn.poehali.dev/files/Andrey2.png" 
                    alt="Андрей Чичеров" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Андрей Чичеров</h3>
                    <p className="text-accent font-semibold">CPO</p>
                  </div>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>15+ лет серийный предприниматель</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>100+ проектов как Product Owner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>Эксперт маркетингового подхода Growth Hacking, усиленной в 10+ раз нашими IT-разработками</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>Эксперт продуктовой методологии Advanced AJTBD, усиленной в 10+ раз нашей AI-платформой</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://t.me/AndreyChicherov" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" className="mr-2" size={18} />
                        @AndreyChicherov
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-16">
              <p className="text-2xl font-bold text-primary mb-4">
                Вместе мы — ваш конвейер для запуска прибыльного бизнеса
              </p>
            </div>
          </div>
        </section>

        <section id="consultation" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Готовы запустить свой стартап?
              </h2>
              <p className="text-xl text-gray-300">
                Получите бесплатную консультацию 15 минут и узнайте, как ваша идея может стать успешным продуктом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold"
                  asChild
                >
                  <a href="https://t.me/AndreyChicherov" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Записаться на консультацию
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">MVPs Lab</h3>
                <p className="text-sm text-gray-400">
                  Ваш конвейер для запуска прибыльного бизнеса
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Контакты</h4>
                <div className="space-y-2">
                  <a 
                    href="https://t.me/AndreyChicherov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                  >
                    <Icon name="Send" size={16} />
                    @AndreyChicherov
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Статьи</h4>
                <div className="space-y-2">
                  <a 
                    href="https://www.notion.so/2ceaa51b9f74809cb267fd79d0e65f97" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-accent transition-colors"
                  >
                    Концепция разработки
                  </a>
                  <a 
                    href="https://www.notion.so/2-2d7aa51b9f7480fc8d5cd5d7b2bcb52a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-accent transition-colors"
                  >
                    Как создавать продукты
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Подписывайтесь</h4>
                <a 
                  href="http://t.me/MVPs_lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                >
                  <Icon name="MessageCircle" size={16} />
                  Telegram канал
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-sm">© 2025 MVPs Lab. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;