# `ctsEventNotificationV3` Submodule <a name="`ctsEventNotificationV3` Submodule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CtsEventNotificationV3 <a name="CtsEventNotificationV3" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3 opentelekomcloud_cts_event_notification_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

new ctsEventNotificationV3.CtsEventNotificationV3(scope: Construct, id: string, config: CtsEventNotificationV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config">CtsEventNotificationV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config">CtsEventNotificationV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList">putNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList">resetNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId">resetTopicId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNotifyUserList` <a name="putNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList"></a>

```typescript
public putNotifyUserList(value: IResolvable | CtsEventNotificationV3NotifyUserList[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a>[]

---

##### `putOperations` <a name="putOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations"></a>

```typescript
public putOperations(value: IResolvable | CtsEventNotificationV3Operations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotifyUserList` <a name="resetNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList"></a>

```typescript
public resetNotifyUserList(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTopicId` <a name="resetTopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId"></a>

```typescript
public resetTopicId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

ctsEventNotificationV3.CtsEventNotificationV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime">createTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId">notificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList">notifyUserList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList">CtsEventNotificationV3NotifyUserListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput">notificationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput">notifyUserListInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput">operationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName">notificationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime"></a>

```typescript
public readonly createTime: number;
```

- *Type:* number

---

##### `notificationId`<sup>Required</sup> <a name="notificationId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId"></a>

```typescript
public readonly notificationId: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `notifyUserList`<sup>Required</sup> <a name="notifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList"></a>

```typescript
public readonly notifyUserList: CtsEventNotificationV3NotifyUserListList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList">CtsEventNotificationV3NotifyUserListList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations"></a>

```typescript
public readonly operations: CtsEventNotificationV3OperationsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationNameInput`<sup>Optional</sup> <a name="notificationNameInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput"></a>

```typescript
public readonly notificationNameInput: string;
```

- *Type:* string

---

##### `notifyUserListInput`<sup>Optional</sup> <a name="notifyUserListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput"></a>

```typescript
public readonly notifyUserListInput: IResolvable | CtsEventNotificationV3NotifyUserList[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a>[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | CtsEventNotificationV3Operations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

---

##### `operationTypeInput`<sup>Optional</sup> <a name="operationTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput"></a>

```typescript
public readonly operationTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationName`<sup>Required</sup> <a name="notificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName"></a>

```typescript
public readonly notificationName: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CtsEventNotificationV3Config <a name="CtsEventNotificationV3Config" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

const ctsEventNotificationV3Config: ctsEventNotificationV3.CtsEventNotificationV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName">notificationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType">operationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#id CtsEventNotificationV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList">notifyUserList</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a>[]</code> | notify_user_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#status CtsEventNotificationV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId">topicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `notificationName`<sup>Required</sup> <a name="notificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName"></a>

```typescript
public readonly notificationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}.

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#id CtsEventNotificationV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifyUserList`<sup>Optional</sup> <a name="notifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList"></a>

```typescript
public readonly notifyUserList: IResolvable | CtsEventNotificationV3NotifyUserList[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a>[]

notify_user_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#notify_user_list CtsEventNotificationV3#notify_user_list}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations"></a>

```typescript
public readonly operations: IResolvable | CtsEventNotificationV3Operations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

operations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#operations CtsEventNotificationV3#operations}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#status CtsEventNotificationV3#status}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}.

---

### CtsEventNotificationV3NotifyUserList <a name="CtsEventNotificationV3NotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

const ctsEventNotificationV3NotifyUserList: ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList.property.userGroup">userGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList.property.userList">userList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}. |

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}.

---

##### `userList`<sup>Required</sup> <a name="userList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList.property.userList"></a>

```typescript
public readonly userList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}.

---

### CtsEventNotificationV3Operations <a name="CtsEventNotificationV3Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

const ctsEventNotificationV3Operations: ctsEventNotificationV3.CtsEventNotificationV3Operations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType">serviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames">traceNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}.

---

##### `traceNames`<sup>Required</sup> <a name="traceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames"></a>

```typescript
public readonly traceNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### CtsEventNotificationV3NotifyUserListList <a name="CtsEventNotificationV3NotifyUserListList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

new ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.get"></a>

```typescript
public get(index: number): CtsEventNotificationV3NotifyUserListOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CtsEventNotificationV3NotifyUserList[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a>[]

---


### CtsEventNotificationV3NotifyUserListOutputReference <a name="CtsEventNotificationV3NotifyUserListOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

new ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userGroupInput">userGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userListInput">userListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userGroup">userGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userList">userList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userGroupInput`<sup>Optional</sup> <a name="userGroupInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userGroupInput"></a>

```typescript
public readonly userGroupInput: string;
```

- *Type:* string

---

##### `userListInput`<sup>Optional</sup> <a name="userListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userListInput"></a>

```typescript
public readonly userListInput: string[];
```

- *Type:* string[]

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

---

##### `userList`<sup>Required</sup> <a name="userList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.userList"></a>

```typescript
public readonly userList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CtsEventNotificationV3NotifyUserList | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserList">CtsEventNotificationV3NotifyUserList</a> | cdktf.IResolvable

---


### CtsEventNotificationV3OperationsList <a name="CtsEventNotificationV3OperationsList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

new ctsEventNotificationV3.CtsEventNotificationV3OperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get"></a>

```typescript
public get(index: number): CtsEventNotificationV3OperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CtsEventNotificationV3Operations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

---


### CtsEventNotificationV3OperationsOutputReference <a name="CtsEventNotificationV3OperationsOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer"></a>

```typescript
import { ctsEventNotificationV3 } from '@cdktf/provider-opentelekomcloud'

new ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput">traceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames">traceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `traceNamesInput`<sup>Optional</sup> <a name="traceNamesInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput"></a>

```typescript
public readonly traceNamesInput: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `traceNames`<sup>Required</sup> <a name="traceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames"></a>

```typescript
public readonly traceNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CtsEventNotificationV3Operations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a> | cdktf.IResolvable

---



