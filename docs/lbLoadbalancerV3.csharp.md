# `opentelekomcloud_lb_loadbalancer_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_lb_loadbalancer_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3).

# `lbLoadbalancerV3` Submodule <a name="`lbLoadbalancerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbLoadbalancerV3 <a name="LbLoadbalancerV3" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbLoadbalancerV3(Construct Scope, string Id, LbLoadbalancerV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config">LbLoadbalancerV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config">LbLoadbalancerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp">PutPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetIpTargetEnable">ResetIpTargetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL4Flavor">ResetL4Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL7Flavor">ResetL7Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetPublicIp">ResetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetRouterId">ResetRouterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetVipAddress">ResetVipAddress</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPublicIp` <a name="PutPublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp"></a>

```csharp
private void PutPublicIp(LbLoadbalancerV3PublicIp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetAdminStateUp"></a>

```csharp
private void ResetAdminStateUp()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpTargetEnable` <a name="ResetIpTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetIpTargetEnable"></a>

```csharp
private void ResetIpTargetEnable()
```

##### `ResetL4Flavor` <a name="ResetL4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL4Flavor"></a>

```csharp
private void ResetL4Flavor()
```

##### `ResetL7Flavor` <a name="ResetL7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL7Flavor"></a>

```csharp
private void ResetL7Flavor()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPublicIp` <a name="ResetPublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetPublicIp"></a>

```csharp
private void ResetPublicIp()
```

##### `ResetRouterId` <a name="ResetRouterId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetRouterId"></a>

```csharp
private void ResetRouterId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVipAddress` <a name="ResetVipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetVipAddress"></a>

```csharp
private void ResetVipAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbLoadbalancerV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbLoadbalancerV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbLoadbalancerV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIp">PublicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference">LbLoadbalancerV3PublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipPortId">VipPortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnableInput">IpTargetEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4FlavorInput">L4FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7FlavorInput">L7FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIdsInput">NetworkIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIpInput">PublicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerIdInput">RouterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddressInput">VipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnable">IpTargetEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4Flavor">L4Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7Flavor">L7Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIds">NetworkIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerId">RouterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddress">VipAddress</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIp"></a>

```csharp
public LbLoadbalancerV3PublicIpOutputReference PublicIp { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference">LbLoadbalancerV3PublicIpOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `VipPortId`<sup>Required</sup> <a name="VipPortId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipPortId"></a>

```csharp
public string VipPortId { get; }
```

- *Type:* string

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUpInput"></a>

```csharp
public object AdminStateUpInput { get; }
```

- *Type:* object

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpTargetEnableInput`<sup>Optional</sup> <a name="IpTargetEnableInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnableInput"></a>

```csharp
public object IpTargetEnableInput { get; }
```

- *Type:* object

---

##### `L4FlavorInput`<sup>Optional</sup> <a name="L4FlavorInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4FlavorInput"></a>

```csharp
public string L4FlavorInput { get; }
```

- *Type:* string

---

##### `L7FlavorInput`<sup>Optional</sup> <a name="L7FlavorInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7FlavorInput"></a>

```csharp
public string L7FlavorInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkIdsInput`<sup>Optional</sup> <a name="NetworkIdsInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIdsInput"></a>

```csharp
public string[] NetworkIdsInput { get; }
```

- *Type:* string[]

---

##### `PublicIpInput`<sup>Optional</sup> <a name="PublicIpInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIpInput"></a>

```csharp
public LbLoadbalancerV3PublicIp PublicIpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---

##### `RouterIdInput`<sup>Optional</sup> <a name="RouterIdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerIdInput"></a>

```csharp
public string RouterIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VipAddressInput`<sup>Optional</sup> <a name="VipAddressInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddressInput"></a>

```csharp
public string VipAddressInput { get; }
```

- *Type:* string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; }
```

- *Type:* object

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpTargetEnable`<sup>Required</sup> <a name="IpTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnable"></a>

```csharp
public object IpTargetEnable { get; }
```

- *Type:* object

---

##### `L4Flavor`<sup>Required</sup> <a name="L4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4Flavor"></a>

```csharp
public string L4Flavor { get; }
```

- *Type:* string

---

##### `L7Flavor`<sup>Required</sup> <a name="L7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7Flavor"></a>

```csharp
public string L7Flavor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkIds`<sup>Required</sup> <a name="NetworkIds" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIds"></a>

```csharp
public string[] NetworkIds { get; }
```

- *Type:* string[]

---

##### `RouterId`<sup>Required</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerId"></a>

```csharp
public string RouterId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VipAddress`<sup>Required</sup> <a name="VipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddress"></a>

```csharp
public string VipAddress { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbLoadbalancerV3Config <a name="LbLoadbalancerV3Config" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbLoadbalancerV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AvailabilityZones,
    string[] NetworkIds,
    object AdminStateUp = null,
    object DeletionProtection = null,
    string Description = null,
    string Id = null,
    object IpTargetEnable = null,
    string L4Flavor = null,
    string L7Flavor = null,
    string Name = null,
    LbLoadbalancerV3PublicIp PublicIp = null,
    string RouterId = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string VipAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.networkIds">NetworkIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#description LbLoadbalancerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.ipTargetEnable">IpTargetEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l4Flavor">L4Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l7Flavor">L7Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#name LbLoadbalancerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.publicIp">PublicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.routerId">RouterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.vipAddress">VipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}.

---

##### `NetworkIds`<sup>Required</sup> <a name="NetworkIds" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.networkIds"></a>

```csharp
public string[] NetworkIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#description LbLoadbalancerV3#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpTargetEnable`<sup>Optional</sup> <a name="IpTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.ipTargetEnable"></a>

```csharp
public object IpTargetEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}.

---

##### `L4Flavor`<sup>Optional</sup> <a name="L4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l4Flavor"></a>

```csharp
public string L4Flavor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}.

---

##### `L7Flavor`<sup>Optional</sup> <a name="L7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l7Flavor"></a>

```csharp
public string L7Flavor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#name LbLoadbalancerV3#name}.

---

##### `PublicIp`<sup>Optional</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.publicIp"></a>

```csharp
public LbLoadbalancerV3PublicIp PublicIp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#public_ip LbLoadbalancerV3#public_ip}

---

##### `RouterId`<sup>Optional</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.routerId"></a>

```csharp
public string RouterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}.

---

##### `VipAddress`<sup>Optional</sup> <a name="VipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.vipAddress"></a>

```csharp
public string VipAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}.

---

### LbLoadbalancerV3PublicIp <a name="LbLoadbalancerV3PublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbLoadbalancerV3PublicIp {
    string BandwidthChargeMode = null,
    string BandwidthName = null,
    string BandwidthShareType = null,
    double BandwidthSize = null,
    string Id = null,
    string IpType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthChargeMode">BandwidthChargeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthName">BandwidthName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_name LbLoadbalancerV3#bandwidth_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthShareType">BandwidthShareType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_share_type LbLoadbalancerV3#bandwidth_share_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthSize">BandwidthSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.ipType">IpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#ip_type LbLoadbalancerV3#ip_type}. |

---

##### `BandwidthChargeMode`<sup>Optional</sup> <a name="BandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthChargeMode"></a>

```csharp
public string BandwidthChargeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}.

---

##### `BandwidthName`<sup>Optional</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthName"></a>

```csharp
public string BandwidthName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_name LbLoadbalancerV3#bandwidth_name}.

---

##### `BandwidthShareType`<sup>Optional</sup> <a name="BandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthShareType"></a>

```csharp
public string BandwidthShareType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_share_type LbLoadbalancerV3#bandwidth_share_type}.

---

##### `BandwidthSize`<sup>Optional</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthSize"></a>

```csharp
public double BandwidthSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpType`<sup>Optional</sup> <a name="IpType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.ipType"></a>

```csharp
public string IpType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/lb_loadbalancer_v3#ip_type LbLoadbalancerV3#ip_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbLoadbalancerV3PublicIpOutputReference <a name="LbLoadbalancerV3PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbLoadbalancerV3PublicIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthChargeMode">ResetBandwidthChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthName">ResetBandwidthName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthShareType">ResetBandwidthShareType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthSize">ResetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetIpType">ResetIpType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthChargeMode` <a name="ResetBandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthChargeMode"></a>

```csharp
private void ResetBandwidthChargeMode()
```

##### `ResetBandwidthName` <a name="ResetBandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthName"></a>

```csharp
private void ResetBandwidthName()
```

##### `ResetBandwidthShareType` <a name="ResetBandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthShareType"></a>

```csharp
private void ResetBandwidthShareType()
```

##### `ResetBandwidthSize` <a name="ResetBandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthSize"></a>

```csharp
private void ResetBandwidthSize()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpType` <a name="ResetIpType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetIpType"></a>

```csharp
private void ResetIpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.managed">Managed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeModeInput">BandwidthChargeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthNameInput">BandwidthNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareTypeInput">BandwidthShareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSizeInput">BandwidthSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipTypeInput">IpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode">BandwidthChargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthName">BandwidthName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType">BandwidthShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize">BandwidthSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipType">IpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.managed"></a>

```csharp
public IResolvable Managed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BandwidthChargeModeInput`<sup>Optional</sup> <a name="BandwidthChargeModeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeModeInput"></a>

```csharp
public string BandwidthChargeModeInput { get; }
```

- *Type:* string

---

##### `BandwidthNameInput`<sup>Optional</sup> <a name="BandwidthNameInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthNameInput"></a>

```csharp
public string BandwidthNameInput { get; }
```

- *Type:* string

---

##### `BandwidthShareTypeInput`<sup>Optional</sup> <a name="BandwidthShareTypeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareTypeInput"></a>

```csharp
public string BandwidthShareTypeInput { get; }
```

- *Type:* string

---

##### `BandwidthSizeInput`<sup>Optional</sup> <a name="BandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSizeInput"></a>

```csharp
public double BandwidthSizeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpTypeInput`<sup>Optional</sup> <a name="IpTypeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipTypeInput"></a>

```csharp
public string IpTypeInput { get; }
```

- *Type:* string

---

##### `BandwidthChargeMode`<sup>Required</sup> <a name="BandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode"></a>

```csharp
public string BandwidthChargeMode { get; }
```

- *Type:* string

---

##### `BandwidthName`<sup>Required</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthName"></a>

```csharp
public string BandwidthName { get; }
```

- *Type:* string

---

##### `BandwidthShareType`<sup>Required</sup> <a name="BandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType"></a>

```csharp
public string BandwidthShareType { get; }
```

- *Type:* string

---

##### `BandwidthSize`<sup>Required</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize"></a>

```csharp
public double BandwidthSize { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpType`<sup>Required</sup> <a name="IpType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipType"></a>

```csharp
public string IpType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.internalValue"></a>

```csharp
public LbLoadbalancerV3PublicIp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---



