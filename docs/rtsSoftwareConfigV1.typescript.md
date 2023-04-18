# `opentelekomcloud_rts_software_config_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_rts_software_config_v1`](https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1).

# `rtsSoftwareConfigV1` Submodule <a name="`rtsSoftwareConfigV1` Submodule" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtsSoftwareConfigV1 <a name="RtsSoftwareConfigV1" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1 opentelekomcloud_rts_software_config_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer"></a>

```typescript
import { rtsSoftwareConfigV1 } from '@cdktf/provider-opentelekomcloud'

new rtsSoftwareConfigV1.RtsSoftwareConfigV1(scope: Construct, id: string, config: RtsSoftwareConfigV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config">RtsSoftwareConfigV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config">RtsSoftwareConfigV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetInputValues">resetInputValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOutputValues">resetOutputValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.putTimeouts"></a>

```typescript
public putTimeouts(value: RtsSoftwareConfigV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputValues` <a name="resetInputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetInputValues"></a>

```typescript
public resetInputValues(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetOutputValues` <a name="resetOutputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOutputValues"></a>

```typescript
public resetOutputValues(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isConstruct"></a>

```typescript
import { rtsSoftwareConfigV1 } from '@cdktf/provider-opentelekomcloud'

rtsSoftwareConfigV1.RtsSoftwareConfigV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformElement"></a>

```typescript
import { rtsSoftwareConfigV1 } from '@cdktf/provider-opentelekomcloud'

rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformResource"></a>

```typescript
import { rtsSoftwareConfigV1 } from '@cdktf/provider-opentelekomcloud'

rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference">RtsSoftwareConfigV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValuesInput">inputValuesInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValuesInput">outputValuesInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValues">inputValues</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValues">outputValues</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeouts"></a>

```typescript
public readonly timeouts: RtsSoftwareConfigV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference">RtsSoftwareConfigV1TimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputValuesInput`<sup>Optional</sup> <a name="inputValuesInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValuesInput"></a>

```typescript
public readonly inputValuesInput: IResolvable | {[ key: string ]: string};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outputValuesInput`<sup>Optional</sup> <a name="outputValuesInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValuesInput"></a>

```typescript
public readonly outputValuesInput: IResolvable | {[ key: string ]: string};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: RtsSoftwareConfigV1Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a> | cdktf.IResolvable

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputValues`<sup>Required</sup> <a name="inputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValues"></a>

```typescript
public readonly inputValues: IResolvable | {[ key: string ]: string};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outputValues`<sup>Required</sup> <a name="outputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValues"></a>

```typescript
public readonly outputValues: IResolvable | {[ key: string ]: string};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtsSoftwareConfigV1Config <a name="RtsSoftwareConfigV1Config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.Initializer"></a>

```typescript
import { rtsSoftwareConfigV1 } from '@cdktf/provider-opentelekomcloud'

const rtsSoftwareConfigV1Config: rtsSoftwareConfigV1.RtsSoftwareConfigV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#name RtsSoftwareConfigV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.config">config</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#config RtsSoftwareConfigV1#config}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#group RtsSoftwareConfigV1#group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#id RtsSoftwareConfigV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.inputValues">inputValues</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#input_values RtsSoftwareConfigV1#input_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#options RtsSoftwareConfigV1#options}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.outputValues">outputValues</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#output_values RtsSoftwareConfigV1#output_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#region RtsSoftwareConfigV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#name RtsSoftwareConfigV1#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#config RtsSoftwareConfigV1#config}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#group RtsSoftwareConfigV1#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#id RtsSoftwareConfigV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputValues`<sup>Optional</sup> <a name="inputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.inputValues"></a>

```typescript
public readonly inputValues: IResolvable | {[ key: string ]: string};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#input_values RtsSoftwareConfigV1#input_values}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#options RtsSoftwareConfigV1#options}.

---

##### `outputValues`<sup>Optional</sup> <a name="outputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.outputValues"></a>

```typescript
public readonly outputValues: IResolvable | {[ key: string ]: string};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#output_values RtsSoftwareConfigV1#output_values}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#region RtsSoftwareConfigV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: RtsSoftwareConfigV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#timeouts RtsSoftwareConfigV1#timeouts}

---

### RtsSoftwareConfigV1Timeouts <a name="RtsSoftwareConfigV1Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.Initializer"></a>

```typescript
import { rtsSoftwareConfigV1 } from '@cdktf/provider-opentelekomcloud'

const rtsSoftwareConfigV1Timeouts: rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#create RtsSoftwareConfigV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#delete RtsSoftwareConfigV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#create RtsSoftwareConfigV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1#delete RtsSoftwareConfigV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtsSoftwareConfigV1TimeoutsOutputReference <a name="RtsSoftwareConfigV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { rtsSoftwareConfigV1 } from '@cdktf/provider-opentelekomcloud'

new rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RtsSoftwareConfigV1Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a> | cdktf.IResolvable

---



