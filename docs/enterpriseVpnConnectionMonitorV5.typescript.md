# `enterpriseVpnConnectionMonitorV5` Submodule <a name="`enterpriseVpnConnectionMonitorV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnConnectionMonitorV5 <a name="EnterpriseVpnConnectionMonitorV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/enterprise_vpn_connection_monitor_v5 opentelekomcloud_enterprise_vpn_connection_monitor_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.Initializer"></a>

```typescript
import { enterpriseVpnConnectionMonitorV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5(scope: Construct, id: string, config: EnterpriseVpnConnectionMonitorV5Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config">EnterpriseVpnConnectionMonitorV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config">EnterpriseVpnConnectionMonitorV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseVpnConnectionMonitorV5 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isConstruct"></a>

```typescript
import { enterpriseVpnConnectionMonitorV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformElement"></a>

```typescript
import { enterpriseVpnConnectionMonitorV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformResource"></a>

```typescript
import { enterpriseVpnConnectionMonitorV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.generateConfigForImport"></a>

```typescript
import { enterpriseVpnConnectionMonitorV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EnterpriseVpnConnectionMonitorV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseVpnConnectionMonitorV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseVpnConnectionMonitorV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/enterprise_vpn_connection_monitor_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnConnectionMonitorV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.destinationIp">destinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationIp`<sup>Required</sup> <a name="destinationIp" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.destinationIp"></a>

```typescript
public readonly destinationIp: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnConnectionMonitorV5Config <a name="EnterpriseVpnConnectionMonitorV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.Initializer"></a>

```typescript
import { enterpriseVpnConnectionMonitorV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnConnectionMonitorV5Config: enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/enterprise_vpn_connection_monitor_v5#connection_id EnterpriseVpnConnectionMonitorV5#connection_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/enterprise_vpn_connection_monitor_v5#id EnterpriseVpnConnectionMonitorV5#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/enterprise_vpn_connection_monitor_v5#connection_id EnterpriseVpnConnectionMonitorV5#connection_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionMonitorV5.EnterpriseVpnConnectionMonitorV5Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/enterprise_vpn_connection_monitor_v5#id EnterpriseVpnConnectionMonitorV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



