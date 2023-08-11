# `opentelekomcloud_rds_read_replica_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_rds_read_replica_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3).

# `rdsReadReplicaV3` Submodule <a name="`rdsReadReplicaV3` Submodule" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsReadReplicaV3 <a name="RdsReadReplicaV3" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3 opentelekomcloud_rds_read_replica_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

new rdsReadReplicaV3.RdsReadReplicaV3(scope: Construct, id: string, config: RdsReadReplicaV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config">RdsReadReplicaV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config">RdsReadReplicaV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetPublicIps">resetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts"></a>

```typescript
public putTimeouts(value: RdsReadReplicaV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume"></a>

```typescript
public putVolume(value: RdsReadReplicaV3Volume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublicIps` <a name="resetPublicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetPublicIps"></a>

```typescript
public resetPublicIps(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

rdsReadReplicaV3.RdsReadReplicaV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.db">db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList">RdsReadReplicaV3DbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.privateIps">privateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference">RdsReadReplicaV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference">RdsReadReplicaV3VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRefInput">flavorRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIpsInput">publicIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfIdInput">replicaOfIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRef">flavorRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIps">publicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfId">replicaOfId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.db"></a>

```typescript
public readonly db: RdsReadReplicaV3DbList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList">RdsReadReplicaV3DbList</a>

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.privateIps"></a>

```typescript
public readonly privateIps: string[];
```

- *Type:* string[]

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeouts"></a>

```typescript
public readonly timeouts: RdsReadReplicaV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference">RdsReadReplicaV3TimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volume"></a>

```typescript
public readonly volume: RdsReadReplicaV3VolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference">RdsReadReplicaV3VolumeOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `flavorRefInput`<sup>Optional</sup> <a name="flavorRefInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRefInput"></a>

```typescript
public readonly flavorRefInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicIpsInput`<sup>Optional</sup> <a name="publicIpsInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIpsInput"></a>

```typescript
public readonly publicIpsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicaOfIdInput`<sup>Optional</sup> <a name="replicaOfIdInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfIdInput"></a>

```typescript
public readonly replicaOfIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RdsReadReplicaV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volumeInput"></a>

```typescript
public readonly volumeInput: RdsReadReplicaV3Volume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `flavorRef`<sup>Required</sup> <a name="flavorRef" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRef"></a>

```typescript
public readonly flavorRef: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIps"></a>

```typescript
public readonly publicIps: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicaOfId`<sup>Required</sup> <a name="replicaOfId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfId"></a>

```typescript
public readonly replicaOfId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsReadReplicaV3Config <a name="RdsReadReplicaV3Config" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

const rdsReadReplicaV3Config: rdsReadReplicaV3.RdsReadReplicaV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.flavorRef">flavorRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.replicaOfId">replicaOfId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.publicIps">publicIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `flavorRef`<sup>Required</sup> <a name="flavorRef" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.flavorRef"></a>

```typescript
public readonly flavorRef: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}.

---

##### `replicaOfId`<sup>Required</sup> <a name="replicaOfId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.replicaOfId"></a>

```typescript
public readonly replicaOfId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.volume"></a>

```typescript
public readonly volume: RdsReadReplicaV3Volume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#volume RdsReadReplicaV3#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.publicIps"></a>

```typescript
public readonly publicIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: RdsReadReplicaV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#timeouts RdsReadReplicaV3#timeouts}

---

### RdsReadReplicaV3Db <a name="RdsReadReplicaV3Db" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

const rdsReadReplicaV3Db: rdsReadReplicaV3.RdsReadReplicaV3Db = { ... }
```


### RdsReadReplicaV3Timeouts <a name="RdsReadReplicaV3Timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

const rdsReadReplicaV3Timeouts: rdsReadReplicaV3.RdsReadReplicaV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#create RdsReadReplicaV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#update RdsReadReplicaV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#create RdsReadReplicaV3#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#update RdsReadReplicaV3#update}.

---

### RdsReadReplicaV3Volume <a name="RdsReadReplicaV3Volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

const rdsReadReplicaV3Volume: rdsReadReplicaV3.RdsReadReplicaV3Volume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#type RdsReadReplicaV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.diskEncryptionId">diskEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#disk_encryption_id RdsReadReplicaV3#disk_encryption_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#type RdsReadReplicaV3#type}.

---

##### `diskEncryptionId`<sup>Optional</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.diskEncryptionId"></a>

```typescript
public readonly diskEncryptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/rds_read_replica_v3#disk_encryption_id RdsReadReplicaV3#disk_encryption_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsReadReplicaV3DbList <a name="RdsReadReplicaV3DbList" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

new rdsReadReplicaV3.RdsReadReplicaV3DbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get"></a>

```typescript
public get(index: number): RdsReadReplicaV3DbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RdsReadReplicaV3DbOutputReference <a name="RdsReadReplicaV3DbOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

new rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db">RdsReadReplicaV3Db</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsReadReplicaV3Db;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db">RdsReadReplicaV3Db</a>

---


### RdsReadReplicaV3TimeoutsOutputReference <a name="RdsReadReplicaV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

new rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsReadReplicaV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

---


### RdsReadReplicaV3VolumeOutputReference <a name="RdsReadReplicaV3VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer"></a>

```typescript
import { rdsReadReplicaV3 } from '@cdktf/provider-opentelekomcloud'

new rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resetDiskEncryptionId">resetDiskEncryptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionId` <a name="resetDiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resetDiskEncryptionId"></a>

```typescript
public resetDiskEncryptionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionIdInput">diskEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionId">diskEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `diskEncryptionIdInput`<sup>Optional</sup> <a name="diskEncryptionIdInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionIdInput"></a>

```typescript
public readonly diskEncryptionIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `diskEncryptionId`<sup>Required</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionId"></a>

```typescript
public readonly diskEncryptionId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsReadReplicaV3Volume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---



