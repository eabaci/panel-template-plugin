// Components
import { PanelPlugin } from '@grafana/ui';

import { Panel } from './components/template-panel';
import { PanelEditor } from './components/template-panel-editor';

// Style
import './sass/template-style.scss';

export const plugin = new PanelPlugin(Panel).setEditor(PanelEditor);
