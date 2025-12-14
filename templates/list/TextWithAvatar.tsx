import React from 'react';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLinearlayout from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component';
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';
import WmIcon from '@wavemaker/app-rn-runtime/components/basic/icon/icon.component';


export const TextWithAvatar = React.memo(
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
              verticalalign="center"
              name="linearlayout1"
              id={'repeat_item_' + $index + '_linearlayout1'}
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
                name="linearlayoutitem1"
                id={'repeat_item_' + $index + '_linearlayoutitem1'}
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
                name="linearlayoutitem2"
                id={'repeat_item_' + $index + '_linearlayoutitem2'}
                marginLeft="12"
                styles={{ root: { marginLeft: 12 }, text: {} }}
                listener={listener}>
                <WmLinearlayout
                  direction="column"
                  name="linearlayout2"
                  id={'repeat_item_' + $index + '_linearlayout2'}
                  listener={listener}>
                  <WmLinearlayoutitem
                    name="linearlayoutitem3"
                    id={'repeat_item_' + $index + '_linearlayoutitem3'}
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
                    name="linearlayoutitem4"
                    id={'repeat_item_' + $index + '_linearlayoutitem4'}
                    marginTop="12"
                    styles={{ root: { marginTop: 12, width: '100%' }, text: {} }}
                    listener={listener}>
                    <WmLabel
                      name="SubTitle"
                      caption={$item.email}
                      id={'repeat_item_' + $index + '_SubTitle'}
                      classname="h5"
                      listener={listener}></WmLabel>
                  </WmLinearlayoutitem>
                </WmLinearlayout>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                name="linearlayoutitem5"
                id={'repeat_item_' + $index + '_linearlayoutitem5'}
                marginLeft="12"
                styles={{ root: { marginLeft: 12, width: 25 }, text: {} }}
                listener={listener}>
                <WmIcon
                  iconclass="wi wi-more-vert"
                  iconsize={22}
                  name="icon1"
                  id={'repeat_item_' + $index + '_icon1'}
                  listener={listener}></WmIcon>
              </WmLinearlayoutitem>
            </WmLinearlayout>
          </WmListTemplate>
        </>
      );
    }
  );