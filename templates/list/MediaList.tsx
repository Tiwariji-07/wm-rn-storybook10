import React from 'react';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';
import WmContainer from '@wavemaker/app-rn-runtime/components/container/container.component';
import WmMenu from '@wavemaker/app-rn-runtime/components/navigation/menu/menu.component';


export const MediaList = React.memo(
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
            layout="media"
            name="listtemplate2_1"
            id={'list_item_' + $index + '_listtemplate2_1'}
            listener={listener}>
            <WmContainer
              name="container1"
              id={'repeat_item_' + $index + '_container1'}
              classname="media-left media-top"
              listener={listener}>
              <WmPicture
                name="Picture"
                shape="circle"
                picturesource={$item.image}
                id={'repeat_item_' + $index + '_Picture'}
                pictureplaceholder="resources/images/imagelists/default-image.png"
                styles={{ root: { height: 32, width: 32 }, text: {} }}
                classname="media-object"
                listener={listener}></WmPicture>
            </WmContainer>
            <WmContainer
              name="container2"
              id={'repeat_item_' + $index + '_container2'}
              styles={{ root: { paddingRight: 12, paddingLeft: 10 }, text: {} }}
              classname="media-body"
              listener={listener}>
              <WmLabel
                caption="Name"
                name="Name"
                fontunit="em"
                id={'repeat_item_' + $index + '_Name'}
                styles={{
                  root: { fontSize: 1.143, marginTop: 0, marginBottom: 4 },
                  text: { fontSize: 1.143 },
                }}
                classname="pull-left"
                listener={listener}></WmLabel>
              <WmLabel
                name="Time"
                caption="Time"
                id={'repeat_item_' + $index + '_Time'}
                classname="pull-right text-muted"
                listener={listener}></WmLabel>
              <WmLabel
                caption={$item.description}
                name="Description"
                id={'repeat_item_' + $index + '_Description'}
                classname="p text-muted"
                listener={listener}></WmLabel>
            </WmContainer>
            <WmContainer
              name="container3"
              id={'repeat_item_' + $index + '_container3'}
              styles={{
                root: {
                  textAlign: 'right',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  flexWrap: 'wrap',
                  paddingRight: 8,
                },
                text: { textAlign: 'right' },
              }}
              classname="media-right"
              listener={listener}>
              <WmMenu
                getDisplayExpression={label =>
                  label
                }
                autoclose="outsideClick"
                caption=""
                type="anchor"
                iconclass="wi wi-more-vert"
                menuposition="down,left"
                name="menu1"
                appLocale='en'
                id={'repeat_item_' + $index + '_menu1'}
                listener={listener}></WmMenu>
            </WmContainer>
          </WmListTemplate>
        </>
      );
    }
  );