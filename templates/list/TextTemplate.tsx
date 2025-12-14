import React from 'react';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';


export const TextTemplate = React.memo(
    ({ $item, $index, list, fragment }) => {
      const item = $item;
      const [currentItemWidgets] = React.useState({});
      list.itemWidgets = list.itemWidgets || [];
      list.itemWidgets[$index] = currentItemWidgets;
      const [listener] = React.useState({
        onComponentInit: c => {
          currentItemWidgets[c.name] = c;
        //   fragment.onComponentInit(c);
        },
        onComponentDestroy: c => {
        //   fragment.onComponentDestroy(c);
          delete currentItemWidgets[c.name];
        },
      });
    //   const { watch } = useWatcher(fragment.watcher);
      return (
        <>
          <WmListTemplate
            layout="inline"
            name="listtemplate1"
            id={'list_item_' + $index + '_listtemplate1'}
            listener={listener}>
            <WmLabel
              name="Text"
              caption={$item.name}
              id={'repeat_item_' + $index + '_Text'}
              styles={{
                root: {
                  paddingTop: 12,
                  paddingRight: 12,
                  paddingBottom: 12,
                  paddingLeft: 12,
                },
                text: {},
              }}
              classname="h4"
              listener={listener}></WmLabel>
          </WmListTemplate>
        </>
      );
    }
  );