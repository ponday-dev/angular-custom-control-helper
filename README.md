# Angular Custom Control Helper

Angular2+で`[(ngModel)]`による双方向バインディングが可能なカスタムコントロールを作成するためのHelperです。
簡素化のために一部イベントなどは省略しているので、そういったイベントを扱う際は独自に定義する必要があります。

## Usage

**実際に使用する場合、必要なコードはcustom-control-helpers.tsだけです。**

+ 双方向バインディングに対応させたいコンポーネントを含むモジュールで`FormsModule`を読み込みます。
+ 双方向バインディングに対応させたいコンポーネントで`src/lib/custom-control-helpers.ts`から`CustomValueAccessor`, `customControlProviderFactory`をimport
+ 双方向バインディングに対応させたいコンポーネントで`CustomValueAccessor`を継承する。  
（このとき、`[(ngModel)]`を通じてやり取りしたい型を型パラメータとして渡します。
+ 双方向バインディングに対応させたいコンポーネントの`@Component`に`providers: [ customControlProviderFactory(コンポーネント) ]`を追加する。
+ `writeValue(value: T)`を実装する。  
特に値の加工が必要なければ`this.value = value`で良いです。`value`が内部変数`_value`のsetterになっているため、代入した時点で`[(ngModel)]`に変更が通知されます。

細かい実装方法はサンプルを確認してください。

## Demo

+ `ng serve`でデモが起動します。
