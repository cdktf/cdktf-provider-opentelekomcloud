# `opentelekomcloud_vpnaas_ipsec_policy_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_vpnaas_ipsec_policy_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2).

# `vpnaasIpsecPolicyV2` Submodule <a name="`vpnaasIpsecPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnaasIpsecPolicyV2 <a name="VpnaasIpsecPolicyV2" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2 opentelekomcloud_vpnaas_ipsec_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2(scope: Construct, id: string, config?: VpnaasIpsecPolicyV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config">VpnaasIpsecPolicyV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config">VpnaasIpsecPolicyV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putLifetime">putLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetAuthAlgorithm">resetAuthAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncapsulationMode">resetEncapsulationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetLifetime">resetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetPfs">resetPfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTransformProtocol">resetTransformProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLifetime` <a name="putLifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putLifetime"></a>

```typescript
public putLifetime(value: IResolvable | VpnaasIpsecPolicyV2Lifetime[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putLifetime.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnaasIpsecPolicyV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>

---

##### `resetAuthAlgorithm` <a name="resetAuthAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetAuthAlgorithm"></a>

```typescript
public resetAuthAlgorithm(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncapsulationMode` <a name="resetEncapsulationMode" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncapsulationMode"></a>

```typescript
public resetEncapsulationMode(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetLifetime"></a>

```typescript
public resetLifetime(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPfs` <a name="resetPfs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetPfs"></a>

```typescript
public resetPfs(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransformProtocol` <a name="resetTransformProtocol" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetTransformProtocol"></a>

```typescript
public resetTransformProtocol(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isConstruct"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformElement"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformResource"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetime">lifetime</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList">VpnaasIpsecPolicyV2LifetimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference">VpnaasIpsecPolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithmInput">authAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationModeInput">encapsulationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetimeInput">lifetimeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfsInput">pfsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocolInput">transformProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithm">authAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationMode">encapsulationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfs">pfs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocol">transformProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetime"></a>

```typescript
public readonly lifetime: VpnaasIpsecPolicyV2LifetimeList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList">VpnaasIpsecPolicyV2LifetimeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeouts"></a>

```typescript
public readonly timeouts: VpnaasIpsecPolicyV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference">VpnaasIpsecPolicyV2TimeoutsOutputReference</a>

---

##### `authAlgorithmInput`<sup>Optional</sup> <a name="authAlgorithmInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithmInput"></a>

```typescript
public readonly authAlgorithmInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encapsulationModeInput`<sup>Optional</sup> <a name="encapsulationModeInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationModeInput"></a>

```typescript
public readonly encapsulationModeInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: IResolvable | VpnaasIpsecPolicyV2Lifetime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pfsInput`<sup>Optional</sup> <a name="pfsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfsInput"></a>

```typescript
public readonly pfsInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnaasIpsecPolicyV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>

---

##### `transformProtocolInput`<sup>Optional</sup> <a name="transformProtocolInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocolInput"></a>

```typescript
public readonly transformProtocolInput: string;
```

- *Type:* string

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authAlgorithm`<sup>Required</sup> <a name="authAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.authAlgorithm"></a>

```typescript
public readonly authAlgorithm: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encapsulationMode`<sup>Required</sup> <a name="encapsulationMode" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encapsulationMode"></a>

```typescript
public readonly encapsulationMode: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.pfs"></a>

```typescript
public readonly pfs: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `transformProtocol`<sup>Required</sup> <a name="transformProtocol" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.transformProtocol"></a>

```typescript
public readonly transformProtocol: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnaasIpsecPolicyV2Config <a name="VpnaasIpsecPolicyV2Config" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.Initializer"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const vpnaasIpsecPolicyV2Config: vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.authAlgorithm">authAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#auth_algorithm VpnaasIpsecPolicyV2#auth_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#description VpnaasIpsecPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encapsulationMode">encapsulationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#encapsulation_mode VpnaasIpsecPolicyV2#encapsulation_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#encryption_algorithm VpnaasIpsecPolicyV2#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#id VpnaasIpsecPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifetime">lifetime</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>[]</code> | lifetime block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#name VpnaasIpsecPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.pfs">pfs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#pfs VpnaasIpsecPolicyV2#pfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#region VpnaasIpsecPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#tenant_id VpnaasIpsecPolicyV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.transformProtocol">transformProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#transform_protocol VpnaasIpsecPolicyV2#transform_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#value_specs VpnaasIpsecPolicyV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authAlgorithm`<sup>Optional</sup> <a name="authAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.authAlgorithm"></a>

```typescript
public readonly authAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#auth_algorithm VpnaasIpsecPolicyV2#auth_algorithm}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#description VpnaasIpsecPolicyV2#description}.

---

##### `encapsulationMode`<sup>Optional</sup> <a name="encapsulationMode" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encapsulationMode"></a>

```typescript
public readonly encapsulationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#encapsulation_mode VpnaasIpsecPolicyV2#encapsulation_mode}.

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#encryption_algorithm VpnaasIpsecPolicyV2#encryption_algorithm}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#id VpnaasIpsecPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.lifetime"></a>

```typescript
public readonly lifetime: IResolvable | VpnaasIpsecPolicyV2Lifetime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>[]

lifetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#lifetime VpnaasIpsecPolicyV2#lifetime}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#name VpnaasIpsecPolicyV2#name}.

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.pfs"></a>

```typescript
public readonly pfs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#pfs VpnaasIpsecPolicyV2#pfs}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#region VpnaasIpsecPolicyV2#region}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#tenant_id VpnaasIpsecPolicyV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: VpnaasIpsecPolicyV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#timeouts VpnaasIpsecPolicyV2#timeouts}

---

##### `transformProtocol`<sup>Optional</sup> <a name="transformProtocol" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.transformProtocol"></a>

```typescript
public readonly transformProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#transform_protocol VpnaasIpsecPolicyV2#transform_protocol}.

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#value_specs VpnaasIpsecPolicyV2#value_specs}.

---

### VpnaasIpsecPolicyV2Lifetime <a name="VpnaasIpsecPolicyV2Lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.Initializer"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const vpnaasIpsecPolicyV2Lifetime: vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.units">units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#units VpnaasIpsecPolicyV2#units}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#value VpnaasIpsecPolicyV2#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#units VpnaasIpsecPolicyV2#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#value VpnaasIpsecPolicyV2#value}.

---

### VpnaasIpsecPolicyV2Timeouts <a name="VpnaasIpsecPolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts.Initializer"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const vpnaasIpsecPolicyV2Timeouts: vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#create VpnaasIpsecPolicyV2#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/vpnaas_ipsec_policy_v2#create VpnaasIpsecPolicyV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnaasIpsecPolicyV2LifetimeList <a name="VpnaasIpsecPolicyV2LifetimeList" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.get"></a>

```typescript
public get(index: number): VpnaasIpsecPolicyV2LifetimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnaasIpsecPolicyV2Lifetime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>[]

---


### VpnaasIpsecPolicyV2LifetimeOutputReference <a name="VpnaasIpsecPolicyV2LifetimeOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2LifetimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnaasIpsecPolicyV2Lifetime;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Lifetime">VpnaasIpsecPolicyV2Lifetime</a>

---


### VpnaasIpsecPolicyV2TimeoutsOutputReference <a name="VpnaasIpsecPolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnaasIpsecPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnaasIpsecPolicyV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasIpsecPolicyV2.VpnaasIpsecPolicyV2Timeouts">VpnaasIpsecPolicyV2Timeouts</a>

---



