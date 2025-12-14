import React from 'react';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLinearlayout from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component';
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';


export const TextWithDescription = React.memo(
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
            name="listtemplate2"
            id={'list_item_' + $index + '_listtemplate2'}
            listener={listener}>
            <WmLinearlayout
              direction="row"
              horizontalalign="left"
              spacing="12"
              verticalalign="top"
              name="linearlayout3"
              id={'repeat_item_' + $index + '_linearlayout3'}
              styles={{
                root: {
                  paddingTop: 12,
                  paddingRight: 12,
                  paddingBottom: 12,
                  paddingLeft: 12,
                },
                text: {},
              }}
              listener={listener}>
              <WmLinearlayoutitem
                name="linearlayoutitem6"
                id={'repeat_item_' + $index + '_linearlayoutitem6'}
                listener={listener}>
                <WmPicture
                  name="Picture"
                  picturesource={$item.image}
                  shape="circle"
                  resizemode="cover"
                  id={'repeat_item_' + $index + '_Picture'}
                  pictureplaceholder="resources/images/imagelists/default-image.png"
                  styles={{ root: { height: 58, width: 58 }, text: {} }}
                  classname="media-object"
                  listener={listener}></WmPicture>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                flexgrow={1}
                name="linearlayoutitem7"
                id={'repeat_item_' + $index + '_linearlayoutitem7'}
                marginLeft="12"
                styles={{ root: { marginLeft: 12 }, text: {} }}
                listener={listener}>
                <WmLinearlayout
                  direction="column"
                  spacing="4"
                  name="linearlayout4"
                  id={'repeat_item_' + $index + '_linearlayout4'}
                  listener={listener}>
                  <WmLinearlayoutitem
                    name="linearlayoutitem8"
                    id={'repeat_item_' + $index + '_linearlayoutitem8'}
                    styles={{ root: { width: '100%' }, text: {} }}
                    listener={listener}>
                    <WmLabel
                      name="Title"
                      caption={$item.name}
                      id={'repeat_item_' + $index + '_Title'}
                      styles={{
                        root: { fontWeight: 'bold' },
                        text: { fontWeight: 'bold' },
                      }}
                      classname="h4"
                      listener={listener}></WmLabel>
                  </WmLinearlayoutitem>
                  <WmLinearlayoutitem
                    name="linearlayoutitem9"
                    id={'repeat_item_' + $index + '_linearlayoutitem9'}
                    marginTop="4"
                    styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
                    listener={listener}>
                    <WmLabel
                      name="SubTitle"
                      caption={$item.email}
                      id={'repeat_item_' + $index + '_SubTitle'}
                      styles={{
                        root: { marginRight: 4, marginLeft: 4 },
                        text: {},
                      }}
                      listener={listener}></WmLabel>
                  </WmLinearlayoutitem>
                  <WmLinearlayoutitem
                    name="linearlayoutitem10"
                    id={'repeat_item_' + $index + '_linearlayoutitem10'}
                    marginTop="4"
                    styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
                    listener={listener}>
                    <WmLabel
                      name="Description"
                      caption={$item.description}
                      id={'repeat_item_' + $index + '_Description'}
                      classname="h5"
                      listener={listener}></WmLabel>
                  </WmLinearlayoutitem>
                </WmLinearlayout>
              </WmLinearlayoutitem>
            </WmLinearlayout>
          </WmListTemplate>
        </>
      );
    }
  );