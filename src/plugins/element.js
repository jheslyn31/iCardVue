import Vue from 'vue'
import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InputNumber,
    Switch,
    Select,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Collapse,
    CollapseItem,
    Drawer,
    Loading,
    MessageBox,
    TimeSelect,
    TimePicker,
    Message,
    Notification,
    Avatar,
    Option,
    OptionGroup,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Timeline,
    TimelineItem,
    Checkbox,
    Radio,
    RadioGroup,
    RadioButton,
    Slider,
    Step,
    Steps,
    CheckboxGroup,
    Cascader
  } from 'element-ui';
  Vue.use(Pagination);
  Vue.use(Step);
  Vue.use(Steps);
  Vue.use(Dialog);
  Vue.use(Autocomplete);
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Switch);
  Vue.use(Slider);
  Vue.use(Select);
  Vue.use(Button);
  Vue.use(ButtonGroup);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(DatePicker);
  Vue.use(Popover);
  Vue.use(Tooltip);
  Vue.use(Breadcrumb);
  Vue.use(BreadcrumbItem);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Tabs);
  Vue.use(TabPane);
  Vue.use(Tag);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Upload);
  Vue.use(Progress);
  Vue.use(Spinner);
  Vue.use(Badge);
  Vue.use(Card);
  Vue.use(Drawer);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(Avatar);
  Vue.use(Option);
  Vue.use(OptionGroup);
  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Submenu);
  Vue.use(Timeline);
  Vue.use(TimelineItem);
  Vue.use(Checkbox);
  Vue.use(TimeSelect);
  Vue.use(TimePicker);
  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(RadioButton);
  Vue.use(Cascader);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.use(Loading.directive);
  
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;