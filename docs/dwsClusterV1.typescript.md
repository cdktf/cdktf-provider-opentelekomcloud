# `dwsClusterV1` Submodule <a name="`dwsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.dwsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DwsClusterV1 <a name="DwsClusterV1" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1 opentelekomcloud_dws_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new dwsClusterV1.DwsClusterV1(scope: Construct, id: string, config: DwsClusterV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config">DwsClusterV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config">DwsClusterV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints">putPublicEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp">putPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetKeepLastManualSnapshot">resetKeepLastManualSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetNumberOfCn">resetNumberOfCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicEndpoints">resetPublicEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicIp">resetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | DwsClusterV1Endpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>[]

---

##### `putPublicEndpoints` <a name="putPublicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints"></a>

```typescript
public putPublicEndpoints(value: IResolvable | DwsClusterV1PublicEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>[]

---

##### `putPublicIp` <a name="putPublicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp"></a>

```typescript
public putPublicIp(value: DwsClusterV1PublicIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts"></a>

```typescript
public putTimeouts(value: DwsClusterV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeepLastManualSnapshot` <a name="resetKeepLastManualSnapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetKeepLastManualSnapshot"></a>

```typescript
public resetKeepLastManualSnapshot(): void
```

##### `resetNumberOfCn` <a name="resetNumberOfCn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetNumberOfCn"></a>

```typescript
public resetNumberOfCn(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPublicEndpoints` <a name="resetPublicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicEndpoints"></a>

```typescript
public resetPublicEndpoints(): void
```

##### `resetPublicIp` <a name="resetPublicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicIp"></a>

```typescript
public resetPublicIp(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DwsClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

dwsClusterV1.DwsClusterV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

dwsClusterV1.DwsClusterV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

dwsClusterV1.DwsClusterV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

dwsClusterV1.DwsClusterV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DwsClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DwsClusterV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DwsClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DwsClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList">DwsClusterV1EndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.privateIp">privateIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpoints">publicEndpoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList">DwsClusterV1PublicEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference">DwsClusterV1PublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.recentEvent">recentEvent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.subStatus">subStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.taskStatus">taskStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference">DwsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshotInput">keepLastManualSnapshotInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCnInput">numberOfCnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNodeInput">numberOfNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpointsInput">publicEndpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIpInput">publicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwdInput">userPwdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshot">keepLastManualSnapshot</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCn">numberOfCn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNode">numberOfNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwd">userPwd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpoints"></a>

```typescript
public readonly endpoints: DwsClusterV1EndpointsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList">DwsClusterV1EndpointsList</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.privateIp"></a>

```typescript
public readonly privateIp: string[];
```

- *Type:* string[]

---

##### `publicEndpoints`<sup>Required</sup> <a name="publicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpoints"></a>

```typescript
public readonly publicEndpoints: DwsClusterV1PublicEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList">DwsClusterV1PublicEndpointsList</a>

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIp"></a>

```typescript
public readonly publicIp: DwsClusterV1PublicIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference">DwsClusterV1PublicIpOutputReference</a>

---

##### `recentEvent`<sup>Required</sup> <a name="recentEvent" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.recentEvent"></a>

```typescript
public readonly recentEvent: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subStatus`<sup>Required</sup> <a name="subStatus" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.subStatus"></a>

```typescript
public readonly subStatus: string;
```

- *Type:* string

---

##### `taskStatus`<sup>Required</sup> <a name="taskStatus" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.taskStatus"></a>

```typescript
public readonly taskStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeouts"></a>

```typescript
public readonly timeouts: DwsClusterV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference">DwsClusterV1TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | DwsClusterV1Endpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keepLastManualSnapshotInput`<sup>Optional</sup> <a name="keepLastManualSnapshotInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshotInput"></a>

```typescript
public readonly keepLastManualSnapshotInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `numberOfCnInput`<sup>Optional</sup> <a name="numberOfCnInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCnInput"></a>

```typescript
public readonly numberOfCnInput: number;
```

- *Type:* number

---

##### `numberOfNodeInput`<sup>Optional</sup> <a name="numberOfNodeInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNodeInput"></a>

```typescript
public readonly numberOfNodeInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `publicEndpointsInput`<sup>Optional</sup> <a name="publicEndpointsInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpointsInput"></a>

```typescript
public readonly publicEndpointsInput: IResolvable | DwsClusterV1PublicEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>[]

---

##### `publicIpInput`<sup>Optional</sup> <a name="publicIpInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIpInput"></a>

```typescript
public readonly publicIpInput: DwsClusterV1PublicIp;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DwsClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `userPwdInput`<sup>Optional</sup> <a name="userPwdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwdInput"></a>

```typescript
public readonly userPwdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keepLastManualSnapshot`<sup>Required</sup> <a name="keepLastManualSnapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshot"></a>

```typescript
public readonly keepLastManualSnapshot: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numberOfCn`<sup>Required</sup> <a name="numberOfCn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCn"></a>

```typescript
public readonly numberOfCn: number;
```

- *Type:* number

---

##### `numberOfNode`<sup>Required</sup> <a name="numberOfNode" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNode"></a>

```typescript
public readonly numberOfNode: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userPwd`<sup>Required</sup> <a name="userPwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwd"></a>

```typescript
public readonly userPwd: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DwsClusterV1Config <a name="DwsClusterV1Config" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const dwsClusterV1Config: dwsClusterV1.DwsClusterV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#name DwsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfNode">numberOfNode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userPwd">userPwd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#id DwsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.keepLastManualSnapshot">keepLastManualSnapshot</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfCn">numberOfCn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#port DwsClusterV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicEndpoints">publicEndpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>[]</code> | public_endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#name DwsClusterV1#name}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}.

---

##### `numberOfNode`<sup>Required</sup> <a name="numberOfNode" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfNode"></a>

```typescript
public readonly numberOfNode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}.

---

##### `userPwd`<sup>Required</sup> <a name="userPwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userPwd"></a>

```typescript
public readonly userPwd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | DwsClusterV1Endpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#endpoints DwsClusterV1#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#id DwsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepLastManualSnapshot`<sup>Optional</sup> <a name="keepLastManualSnapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.keepLastManualSnapshot"></a>

```typescript
public readonly keepLastManualSnapshot: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}.

---

##### `numberOfCn`<sup>Optional</sup> <a name="numberOfCn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfCn"></a>

```typescript
public readonly numberOfCn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#port DwsClusterV1#port}.

---

##### `publicEndpoints`<sup>Optional</sup> <a name="publicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicEndpoints"></a>

```typescript
public readonly publicEndpoints: IResolvable | DwsClusterV1PublicEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>[]

public_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#public_endpoints DwsClusterV1#public_endpoints}

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicIp"></a>

```typescript
public readonly publicIp: DwsClusterV1PublicIp;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#public_ip DwsClusterV1#public_ip}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: DwsClusterV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#timeouts DwsClusterV1#timeouts}

---

### DwsClusterV1Endpoints <a name="DwsClusterV1Endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const dwsClusterV1Endpoints: dwsClusterV1.DwsClusterV1Endpoints = { ... }
```


### DwsClusterV1PublicEndpoints <a name="DwsClusterV1PublicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const dwsClusterV1PublicEndpoints: dwsClusterV1.DwsClusterV1PublicEndpoints = { ... }
```


### DwsClusterV1PublicIp <a name="DwsClusterV1PublicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const dwsClusterV1PublicIp: dwsClusterV1.DwsClusterV1PublicIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.eipId">eipId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#eip_id DwsClusterV1#eip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.publicBindType">publicBindType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#public_bind_type DwsClusterV1#public_bind_type}. |

---

##### `eipId`<sup>Optional</sup> <a name="eipId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.eipId"></a>

```typescript
public readonly eipId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#eip_id DwsClusterV1#eip_id}.

---

##### `publicBindType`<sup>Optional</sup> <a name="publicBindType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.publicBindType"></a>

```typescript
public readonly publicBindType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#public_bind_type DwsClusterV1#public_bind_type}.

---

### DwsClusterV1Timeouts <a name="DwsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const dwsClusterV1Timeouts: dwsClusterV1.DwsClusterV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#create DwsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#delete DwsClusterV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#update DwsClusterV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#create DwsClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#delete DwsClusterV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/dws_cluster_v1#update DwsClusterV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DwsClusterV1EndpointsList <a name="DwsClusterV1EndpointsList" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new dwsClusterV1.DwsClusterV1EndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get"></a>

```typescript
public get(index: number): DwsClusterV1EndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DwsClusterV1Endpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>[]

---


### DwsClusterV1EndpointsOutputReference <a name="DwsClusterV1EndpointsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new dwsClusterV1.DwsClusterV1EndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.connectInfo">connectInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.jdbcUrl">jdbcUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectInfo`<sup>Required</sup> <a name="connectInfo" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.connectInfo"></a>

```typescript
public readonly connectInfo: string;
```

- *Type:* string

---

##### `jdbcUrl`<sup>Required</sup> <a name="jdbcUrl" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.jdbcUrl"></a>

```typescript
public readonly jdbcUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DwsClusterV1Endpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>

---


### DwsClusterV1PublicEndpointsList <a name="DwsClusterV1PublicEndpointsList" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new dwsClusterV1.DwsClusterV1PublicEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get"></a>

```typescript
public get(index: number): DwsClusterV1PublicEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DwsClusterV1PublicEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>[]

---


### DwsClusterV1PublicEndpointsOutputReference <a name="DwsClusterV1PublicEndpointsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.jdbcUrl">jdbcUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.publicConnectInfo">publicConnectInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jdbcUrl`<sup>Required</sup> <a name="jdbcUrl" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.jdbcUrl"></a>

```typescript
public readonly jdbcUrl: string;
```

- *Type:* string

---

##### `publicConnectInfo`<sup>Required</sup> <a name="publicConnectInfo" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.publicConnectInfo"></a>

```typescript
public readonly publicConnectInfo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DwsClusterV1PublicEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>

---


### DwsClusterV1PublicIpOutputReference <a name="DwsClusterV1PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new dwsClusterV1.DwsClusterV1PublicIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetEipId">resetEipId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetPublicBindType">resetPublicBindType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEipId` <a name="resetEipId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetEipId"></a>

```typescript
public resetEipId(): void
```

##### `resetPublicBindType` <a name="resetPublicBindType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetPublicBindType"></a>

```typescript
public resetPublicBindType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipIdInput">eipIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindTypeInput">publicBindTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipId">eipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindType">publicBindType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eipIdInput`<sup>Optional</sup> <a name="eipIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipIdInput"></a>

```typescript
public readonly eipIdInput: string;
```

- *Type:* string

---

##### `publicBindTypeInput`<sup>Optional</sup> <a name="publicBindTypeInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindTypeInput"></a>

```typescript
public readonly publicBindTypeInput: string;
```

- *Type:* string

---

##### `eipId`<sup>Required</sup> <a name="eipId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipId"></a>

```typescript
public readonly eipId: string;
```

- *Type:* string

---

##### `publicBindType`<sup>Required</sup> <a name="publicBindType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindType"></a>

```typescript
public readonly publicBindType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DwsClusterV1PublicIp;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---


### DwsClusterV1TimeoutsOutputReference <a name="DwsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { dwsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new dwsClusterV1.DwsClusterV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DwsClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

---



