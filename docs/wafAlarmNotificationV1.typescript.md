# `wafAlarmNotificationV1` Submodule <a name="`wafAlarmNotificationV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafAlarmNotificationV1 <a name="WafAlarmNotificationV1" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1 opentelekomcloud_waf_alarm_notification_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer"></a>

```typescript
import { wafAlarmNotificationV1 } from '@cdktf/provider-opentelekomcloud'

new wafAlarmNotificationV1.WafAlarmNotificationV1(scope: Construct, id: string, config: WafAlarmNotificationV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config">WafAlarmNotificationV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config">WafAlarmNotificationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetLocale">resetLocale</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetLocale"></a>

```typescript
public resetLocale(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafAlarmNotificationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isConstruct"></a>

```typescript
import { wafAlarmNotificationV1 } from '@cdktf/provider-opentelekomcloud'

wafAlarmNotificationV1.WafAlarmNotificationV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformElement"></a>

```typescript
import { wafAlarmNotificationV1 } from '@cdktf/provider-opentelekomcloud'

wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformResource"></a>

```typescript
import { wafAlarmNotificationV1 } from '@cdktf/provider-opentelekomcloud'

wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.generateConfigForImport"></a>

```typescript
import { wafAlarmNotificationV1 } from '@cdktf/provider-opentelekomcloud'

wafAlarmNotificationV1.WafAlarmNotificationV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WafAlarmNotificationV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafAlarmNotificationV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafAlarmNotificationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafAlarmNotificationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequencyInput">sendFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threatInput">threatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.timesInput">timesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrnInput">topicUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequency">sendFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threat">threat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.times">times</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrn">topicUrn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `sendFrequencyInput`<sup>Optional</sup> <a name="sendFrequencyInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequencyInput"></a>

```typescript
public readonly sendFrequencyInput: number;
```

- *Type:* number

---

##### `threatInput`<sup>Optional</sup> <a name="threatInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threatInput"></a>

```typescript
public readonly threatInput: string[];
```

- *Type:* string[]

---

##### `timesInput`<sup>Optional</sup> <a name="timesInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.timesInput"></a>

```typescript
public readonly timesInput: number;
```

- *Type:* number

---

##### `topicUrnInput`<sup>Optional</sup> <a name="topicUrnInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrnInput"></a>

```typescript
public readonly topicUrnInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `sendFrequency`<sup>Required</sup> <a name="sendFrequency" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequency"></a>

```typescript
public readonly sendFrequency: number;
```

- *Type:* number

---

##### `threat`<sup>Required</sup> <a name="threat" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threat"></a>

```typescript
public readonly threat: string[];
```

- *Type:* string[]

---

##### `times`<sup>Required</sup> <a name="times" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.times"></a>

```typescript
public readonly times: number;
```

- *Type:* number

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrn"></a>

```typescript
public readonly topicUrn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafAlarmNotificationV1Config <a name="WafAlarmNotificationV1Config" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.Initializer"></a>

```typescript
import { wafAlarmNotificationV1 } from '@cdktf/provider-opentelekomcloud'

const wafAlarmNotificationV1Config: wafAlarmNotificationV1.WafAlarmNotificationV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#enabled WafAlarmNotificationV1#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.sendFrequency">sendFrequency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#send_frequency WafAlarmNotificationV1#send_frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.threat">threat</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#threat WafAlarmNotificationV1#threat}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.times">times</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#times WafAlarmNotificationV1#times}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.topicUrn">topicUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#topic_urn WafAlarmNotificationV1#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#id WafAlarmNotificationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#locale WafAlarmNotificationV1#locale}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#enabled WafAlarmNotificationV1#enabled}.

---

##### `sendFrequency`<sup>Required</sup> <a name="sendFrequency" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.sendFrequency"></a>

```typescript
public readonly sendFrequency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#send_frequency WafAlarmNotificationV1#send_frequency}.

---

##### `threat`<sup>Required</sup> <a name="threat" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.threat"></a>

```typescript
public readonly threat: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#threat WafAlarmNotificationV1#threat}.

---

##### `times`<sup>Required</sup> <a name="times" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.times"></a>

```typescript
public readonly times: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#times WafAlarmNotificationV1#times}.

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.topicUrn"></a>

```typescript
public readonly topicUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#topic_urn WafAlarmNotificationV1#topic_urn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#id WafAlarmNotificationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/waf_alarm_notification_v1#locale WafAlarmNotificationV1#locale}.

---



