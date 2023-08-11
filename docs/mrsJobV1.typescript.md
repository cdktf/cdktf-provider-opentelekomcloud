# `opentelekomcloud_mrs_job_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_mrs_job_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1).

# `mrsJobV1` Submodule <a name="`mrsJobV1` Submodule" id="@cdktf/provider-opentelekomcloud.mrsJobV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrsJobV1 <a name="MrsJobV1" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1 opentelekomcloud_mrs_job_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer"></a>

```typescript
import { mrsJobV1 } from '@cdktf/provider-opentelekomcloud'

new mrsJobV1.MrsJobV1(scope: Construct, id: string, config: MrsJobV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config">MrsJobV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config">MrsJobV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetHiveScriptPath">resetHiveScriptPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsProtected">resetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetJobLog">resetJobLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts"></a>

```typescript
public putTimeouts(value: MrsJobV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetHiveScriptPath` <a name="resetHiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetHiveScriptPath"></a>

```typescript
public resetHiveScriptPath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsProtected"></a>

```typescript
public resetIsProtected(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetJobLog` <a name="resetJobLog" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetJobLog"></a>

```typescript
public resetJobLog(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOutput"></a>

```typescript
public resetOutput(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isConstruct"></a>

```typescript
import { mrsJobV1 } from '@cdktf/provider-opentelekomcloud'

mrsJobV1.MrsJobV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformElement"></a>

```typescript
import { mrsJobV1 } from '@cdktf/provider-opentelekomcloud'

mrsJobV1.MrsJobV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformResource"></a>

```typescript
import { mrsJobV1 } from '@cdktf/provider-opentelekomcloud'

mrsJobV1.MrsJobV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobState">jobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference">MrsJobV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.argumentsInput">argumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPathInput">hiveScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtectedInput">isProtectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPathInput">jarPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLogInput">jobLogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobTypeInput">jobTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.outputInput">outputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.arguments">arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPath">hiveScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtected">isProtected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPath">jarPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLog">jobLog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobType">jobType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.output">output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobState`<sup>Required</sup> <a name="jobState" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobState"></a>

```typescript
public readonly jobState: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeouts"></a>

```typescript
public readonly timeouts: MrsJobV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference">MrsJobV1TimeoutsOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `hiveScriptPathInput`<sup>Optional</sup> <a name="hiveScriptPathInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPathInput"></a>

```typescript
public readonly hiveScriptPathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtectedInput"></a>

```typescript
public readonly isProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jarPathInput`<sup>Optional</sup> <a name="jarPathInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPathInput"></a>

```typescript
public readonly jarPathInput: string;
```

- *Type:* string

---

##### `jobLogInput`<sup>Optional</sup> <a name="jobLogInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLogInput"></a>

```typescript
public readonly jobLogInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: number;
```

- *Type:* number

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.outputInput"></a>

```typescript
public readonly outputInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MrsJobV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `hiveScriptPath`<sup>Required</sup> <a name="hiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPath"></a>

```typescript
public readonly hiveScriptPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jarPath`<sup>Required</sup> <a name="jarPath" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPath"></a>

```typescript
public readonly jarPath: string;
```

- *Type:* string

---

##### `jobLog`<sup>Required</sup> <a name="jobLog" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLog"></a>

```typescript
public readonly jobLog: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobType"></a>

```typescript
public readonly jobType: number;
```

- *Type:* number

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MrsJobV1Config <a name="MrsJobV1Config" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.Initializer"></a>

```typescript
import { mrsJobV1 } from '@cdktf/provider-opentelekomcloud'

const mrsJobV1Config: mrsJobV1.MrsJobV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#cluster_id MrsJobV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jarPath">jarPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#jar_path MrsJobV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#job_name MrsJobV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobType">jobType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#job_type MrsJobV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.arguments">arguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#arguments MrsJobV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.hiveScriptPath">hiveScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#hive_script_path MrsJobV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#id MrsJobV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#input MrsJobV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isProtected">isProtected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#is_protected MrsJobV1#is_protected}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#is_public MrsJobV1#is_public}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobLog">jobLog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#job_log MrsJobV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.output">output</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#output MrsJobV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#region MrsJobV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#cluster_id MrsJobV1#cluster_id}.

---

##### `jarPath`<sup>Required</sup> <a name="jarPath" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jarPath"></a>

```typescript
public readonly jarPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#jar_path MrsJobV1#jar_path}.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#job_name MrsJobV1#job_name}.

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobType"></a>

```typescript
public readonly jobType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#job_type MrsJobV1#job_type}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#arguments MrsJobV1#arguments}.

---

##### `hiveScriptPath`<sup>Optional</sup> <a name="hiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.hiveScriptPath"></a>

```typescript
public readonly hiveScriptPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#hive_script_path MrsJobV1#hive_script_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#id MrsJobV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#input MrsJobV1#input}.

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#is_protected MrsJobV1#is_protected}.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#is_public MrsJobV1#is_public}.

---

##### `jobLog`<sup>Optional</sup> <a name="jobLog" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobLog"></a>

```typescript
public readonly jobLog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#job_log MrsJobV1#job_log}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#output MrsJobV1#output}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#region MrsJobV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: MrsJobV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#timeouts MrsJobV1#timeouts}

---

### MrsJobV1Timeouts <a name="MrsJobV1Timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.Initializer"></a>

```typescript
import { mrsJobV1 } from '@cdktf/provider-opentelekomcloud'

const mrsJobV1Timeouts: mrsJobV1.MrsJobV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#create MrsJobV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#delete MrsJobV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#update MrsJobV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#create MrsJobV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#delete MrsJobV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/mrs_job_v1#update MrsJobV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrsJobV1TimeoutsOutputReference <a name="MrsJobV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { mrsJobV1 } from '@cdktf/provider-opentelekomcloud'

new mrsJobV1.MrsJobV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsJobV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>

---



