# `opentelekomcloud_cts_tracker_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_cts_tracker_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3).

# `ctsTrackerV3` Submodule <a name="`ctsTrackerV3` Submodule" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CtsTrackerV3 <a name="CtsTrackerV3" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3 opentelekomcloud_cts_tracker_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.Initializer"></a>

```typescript
import { ctsTrackerV3 } from '@cdktf/provider-opentelekomcloud'

new ctsTrackerV3.CtsTrackerV3(scope: Construct, id: string, config: CtsTrackerV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config">CtsTrackerV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config">CtsTrackerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetFilePrefixName">resetFilePrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetIsLtsEnabled">resetIsLtsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetIsObsCreated">resetIsObsCreated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.putTimeouts"></a>

```typescript
public putTimeouts(value: CtsTrackerV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts">CtsTrackerV3Timeouts</a>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetFilePrefixName` <a name="resetFilePrefixName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetFilePrefixName"></a>

```typescript
public resetFilePrefixName(): void
```

##### `resetIsLtsEnabled` <a name="resetIsLtsEnabled" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetIsLtsEnabled"></a>

```typescript
public resetIsLtsEnabled(): void
```

##### `resetIsObsCreated` <a name="resetIsObsCreated" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetIsObsCreated"></a>

```typescript
public resetIsObsCreated(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isConstruct"></a>

```typescript
import { ctsTrackerV3 } from '@cdktf/provider-opentelekomcloud'

ctsTrackerV3.CtsTrackerV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isTerraformElement"></a>

```typescript
import { ctsTrackerV3 } from '@cdktf/provider-opentelekomcloud'

ctsTrackerV3.CtsTrackerV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isTerraformResource"></a>

```typescript
import { ctsTrackerV3 } from '@cdktf/provider-opentelekomcloud'

ctsTrackerV3.CtsTrackerV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.bucketLifecycle">bucketLifecycle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.detail">detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.logTopicName">logTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference">CtsTrackerV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.trackerName">trackerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.trackerType">trackerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.filePrefixNameInput">filePrefixNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isLtsEnabledInput">isLtsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isObsCreatedInput">isObsCreatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts">CtsTrackerV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.filePrefixName">filePrefixName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isLtsEnabled">isLtsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isObsCreated">isObsCreated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketLifecycle`<sup>Required</sup> <a name="bucketLifecycle" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.bucketLifecycle"></a>

```typescript
public readonly bucketLifecycle: number;
```

- *Type:* number

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.detail"></a>

```typescript
public readonly detail: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logTopicName`<sup>Required</sup> <a name="logTopicName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.logTopicName"></a>

```typescript
public readonly logTopicName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.timeouts"></a>

```typescript
public readonly timeouts: CtsTrackerV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference">CtsTrackerV3TimeoutsOutputReference</a>

---

##### `trackerName`<sup>Required</sup> <a name="trackerName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.trackerName"></a>

```typescript
public readonly trackerName: string;
```

- *Type:* string

---

##### `trackerType`<sup>Required</sup> <a name="trackerType" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.trackerType"></a>

```typescript
public readonly trackerType: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `filePrefixNameInput`<sup>Optional</sup> <a name="filePrefixNameInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.filePrefixNameInput"></a>

```typescript
public readonly filePrefixNameInput: string;
```

- *Type:* string

---

##### `isLtsEnabledInput`<sup>Optional</sup> <a name="isLtsEnabledInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isLtsEnabledInput"></a>

```typescript
public readonly isLtsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isObsCreatedInput`<sup>Optional</sup> <a name="isObsCreatedInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isObsCreatedInput"></a>

```typescript
public readonly isObsCreatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CtsTrackerV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts">CtsTrackerV3Timeouts</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `filePrefixName`<sup>Required</sup> <a name="filePrefixName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.filePrefixName"></a>

```typescript
public readonly filePrefixName: string;
```

- *Type:* string

---

##### `isLtsEnabled`<sup>Required</sup> <a name="isLtsEnabled" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isLtsEnabled"></a>

```typescript
public readonly isLtsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isObsCreated`<sup>Required</sup> <a name="isObsCreated" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.isObsCreated"></a>

```typescript
public readonly isObsCreated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CtsTrackerV3Config <a name="CtsTrackerV3Config" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.Initializer"></a>

```typescript
import { ctsTrackerV3 } from '@cdktf/provider-opentelekomcloud'

const ctsTrackerV3Config: ctsTrackerV3.CtsTrackerV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#status CtsTrackerV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#bucket_name CtsTrackerV3#bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.filePrefixName">filePrefixName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#file_prefix_name CtsTrackerV3#file_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.isLtsEnabled">isLtsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#is_lts_enabled CtsTrackerV3#is_lts_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.isObsCreated">isObsCreated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#is_obs_created CtsTrackerV3#is_obs_created}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts">CtsTrackerV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#status CtsTrackerV3#status}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#bucket_name CtsTrackerV3#bucket_name}.

---

##### `filePrefixName`<sup>Optional</sup> <a name="filePrefixName" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.filePrefixName"></a>

```typescript
public readonly filePrefixName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#file_prefix_name CtsTrackerV3#file_prefix_name}.

---

##### `isLtsEnabled`<sup>Optional</sup> <a name="isLtsEnabled" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.isLtsEnabled"></a>

```typescript
public readonly isLtsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#is_lts_enabled CtsTrackerV3#is_lts_enabled}.

---

##### `isObsCreated`<sup>Optional</sup> <a name="isObsCreated" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.isObsCreated"></a>

```typescript
public readonly isObsCreated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#is_obs_created CtsTrackerV3#is_obs_created}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: CtsTrackerV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts">CtsTrackerV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#timeouts CtsTrackerV3#timeouts}

---

### CtsTrackerV3Timeouts <a name="CtsTrackerV3Timeouts" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts.Initializer"></a>

```typescript
import { ctsTrackerV3 } from '@cdktf/provider-opentelekomcloud'

const ctsTrackerV3Timeouts: ctsTrackerV3.CtsTrackerV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#create CtsTrackerV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#delete CtsTrackerV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#create CtsTrackerV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cts_tracker_v3#delete CtsTrackerV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CtsTrackerV3TimeoutsOutputReference <a name="CtsTrackerV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { ctsTrackerV3 } from '@cdktf/provider-opentelekomcloud'

new ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts">CtsTrackerV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CtsTrackerV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ctsTrackerV3.CtsTrackerV3Timeouts">CtsTrackerV3Timeouts</a>

---



