# `enterpriseVpnGatewayV5` Submodule <a name="`enterpriseVpnGatewayV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnGatewayV5 <a name="EnterpriseVpnGatewayV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5 opentelekomcloud_enterprise_vpn_gateway_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.NewEnterpriseVpnGatewayV5(scope Construct, id *string, config EnterpriseVpnGatewayV5Config) EnterpriseVpnGatewayV5
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config">EnterpriseVpnGatewayV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config">EnterpriseVpnGatewayV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1">PutEip1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2">PutEip2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp1">ResetAccessPrivateIp1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp2">ResetAccessPrivateIp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessSubnetId">ResetAccessSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessVpcId">ResetAccessVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAttachmentType">ResetAttachmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetConnectSubnet">ResetConnectSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetDeleteEip">ResetDeleteEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip1">ResetEip1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip2">ResetEip2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetErId">ResetErId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetFlavor">ResetFlavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetHaMode">ResetHaMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetLocalSubnets">ResetLocalSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEip1` <a name="PutEip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1"></a>

```go
func PutEip1(value EnterpriseVpnGatewayV5Eip1)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

---

##### `PutEip2` <a name="PutEip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2"></a>

```go
func PutEip2(value EnterpriseVpnGatewayV5Eip2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts"></a>

```go
func PutTimeouts(value EnterpriseVpnGatewayV5Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>

---

##### `ResetAccessPrivateIp1` <a name="ResetAccessPrivateIp1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp1"></a>

```go
func ResetAccessPrivateIp1()
```

##### `ResetAccessPrivateIp2` <a name="ResetAccessPrivateIp2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp2"></a>

```go
func ResetAccessPrivateIp2()
```

##### `ResetAccessSubnetId` <a name="ResetAccessSubnetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessSubnetId"></a>

```go
func ResetAccessSubnetId()
```

##### `ResetAccessVpcId` <a name="ResetAccessVpcId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessVpcId"></a>

```go
func ResetAccessVpcId()
```

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAsn"></a>

```go
func ResetAsn()
```

##### `ResetAttachmentType` <a name="ResetAttachmentType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAttachmentType"></a>

```go
func ResetAttachmentType()
```

##### `ResetConnectSubnet` <a name="ResetConnectSubnet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetConnectSubnet"></a>

```go
func ResetConnectSubnet()
```

##### `ResetDeleteEip` <a name="ResetDeleteEip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetDeleteEip"></a>

```go
func ResetDeleteEip()
```

##### `ResetEip1` <a name="ResetEip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip1"></a>

```go
func ResetEip1()
```

##### `ResetEip2` <a name="ResetEip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip2"></a>

```go
func ResetEip2()
```

##### `ResetErId` <a name="ResetErId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetErId"></a>

```go
func ResetErId()
```

##### `ResetFlavor` <a name="ResetFlavor" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetFlavor"></a>

```go
func ResetFlavor()
```

##### `ResetHaMode` <a name="ResetHaMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetHaMode"></a>

```go
func ResetHaMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalSubnets` <a name="ResetLocalSubnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetLocalSubnets"></a>

```go
func ResetLocalSubnets()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseVpnGatewayV5 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.EnterpriseVpnGatewayV5_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.EnterpriseVpnGatewayV5_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.EnterpriseVpnGatewayV5_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.EnterpriseVpnGatewayV5_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EnterpriseVpnGatewayV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnterpriseVpnGatewayV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnterpriseVpnGatewayV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnGatewayV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1">Eip1</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference">EnterpriseVpnGatewayV5Eip1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2">Eip2</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference">EnterpriseVpnGatewayV5Eip2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erAttachmentId">ErAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference">EnterpriseVpnGatewayV5TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionGroup">UsedConnectionGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionNumber">UsedConnectionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1Input">AccessPrivateIp1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2Input">AccessPrivateIp2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetIdInput">AccessSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcIdInput">AccessVpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asnInput">AsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentTypeInput">AttachmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnetInput">ConnectSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.deleteEipInput">DeleteEipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1Input">Eip1Input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2Input">Eip2Input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erIdInput">ErIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavorInput">FlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haModeInput">HaModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnetsInput">LocalSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1">AccessPrivateIp1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2">AccessPrivateIp2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetId">AccessSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcId">AccessVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnet">ConnectSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.deleteEip">DeleteEip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erId">ErId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavor">Flavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haMode">HaMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnets">LocalSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Eip1`<sup>Required</sup> <a name="Eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1"></a>

```go
func Eip1() EnterpriseVpnGatewayV5Eip1OutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference">EnterpriseVpnGatewayV5Eip1OutputReference</a>

---

##### `Eip2`<sup>Required</sup> <a name="Eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2"></a>

```go
func Eip2() EnterpriseVpnGatewayV5Eip2OutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference">EnterpriseVpnGatewayV5Eip2OutputReference</a>

---

##### `ErAttachmentId`<sup>Required</sup> <a name="ErAttachmentId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erAttachmentId"></a>

```go
func ErAttachmentId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeouts"></a>

```go
func Timeouts() EnterpriseVpnGatewayV5TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference">EnterpriseVpnGatewayV5TimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UsedConnectionGroup`<sup>Required</sup> <a name="UsedConnectionGroup" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionGroup"></a>

```go
func UsedConnectionGroup() *f64
```

- *Type:* *f64

---

##### `UsedConnectionNumber`<sup>Required</sup> <a name="UsedConnectionNumber" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionNumber"></a>

```go
func UsedConnectionNumber() *f64
```

- *Type:* *f64

---

##### `AccessPrivateIp1Input`<sup>Optional</sup> <a name="AccessPrivateIp1Input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1Input"></a>

```go
func AccessPrivateIp1Input() *string
```

- *Type:* *string

---

##### `AccessPrivateIp2Input`<sup>Optional</sup> <a name="AccessPrivateIp2Input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2Input"></a>

```go
func AccessPrivateIp2Input() *string
```

- *Type:* *string

---

##### `AccessSubnetIdInput`<sup>Optional</sup> <a name="AccessSubnetIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetIdInput"></a>

```go
func AccessSubnetIdInput() *string
```

- *Type:* *string

---

##### `AccessVpcIdInput`<sup>Optional</sup> <a name="AccessVpcIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcIdInput"></a>

```go
func AccessVpcIdInput() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asnInput"></a>

```go
func AsnInput() *f64
```

- *Type:* *f64

---

##### `AttachmentTypeInput`<sup>Optional</sup> <a name="AttachmentTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentTypeInput"></a>

```go
func AttachmentTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectSubnetInput`<sup>Optional</sup> <a name="ConnectSubnetInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnetInput"></a>

```go
func ConnectSubnetInput() *string
```

- *Type:* *string

---

##### `DeleteEipInput`<sup>Optional</sup> <a name="DeleteEipInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.deleteEipInput"></a>

```go
func DeleteEipInput() interface{}
```

- *Type:* interface{}

---

##### `Eip1Input`<sup>Optional</sup> <a name="Eip1Input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1Input"></a>

```go
func Eip1Input() EnterpriseVpnGatewayV5Eip1
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

---

##### `Eip2Input`<sup>Optional</sup> <a name="Eip2Input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2Input"></a>

```go
func Eip2Input() EnterpriseVpnGatewayV5Eip2
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

---

##### `ErIdInput`<sup>Optional</sup> <a name="ErIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erIdInput"></a>

```go
func ErIdInput() *string
```

- *Type:* *string

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavorInput"></a>

```go
func FlavorInput() *string
```

- *Type:* *string

---

##### `HaModeInput`<sup>Optional</sup> <a name="HaModeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haModeInput"></a>

```go
func HaModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalSubnetsInput`<sup>Optional</sup> <a name="LocalSubnetsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnetsInput"></a>

```go
func LocalSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AccessPrivateIp1`<sup>Required</sup> <a name="AccessPrivateIp1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1"></a>

```go
func AccessPrivateIp1() *string
```

- *Type:* *string

---

##### `AccessPrivateIp2`<sup>Required</sup> <a name="AccessPrivateIp2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2"></a>

```go
func AccessPrivateIp2() *string
```

- *Type:* *string

---

##### `AccessSubnetId`<sup>Required</sup> <a name="AccessSubnetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetId"></a>

```go
func AccessSubnetId() *string
```

- *Type:* *string

---

##### `AccessVpcId`<sup>Required</sup> <a name="AccessVpcId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcId"></a>

```go
func AccessVpcId() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectSubnet`<sup>Required</sup> <a name="ConnectSubnet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnet"></a>

```go
func ConnectSubnet() *string
```

- *Type:* *string

---

##### `DeleteEip`<sup>Required</sup> <a name="DeleteEip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.deleteEip"></a>

```go
func DeleteEip() interface{}
```

- *Type:* interface{}

---

##### `ErId`<sup>Required</sup> <a name="ErId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erId"></a>

```go
func ErId() *string
```

- *Type:* *string

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavor"></a>

```go
func Flavor() *string
```

- *Type:* *string

---

##### `HaMode`<sup>Required</sup> <a name="HaMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haMode"></a>

```go
func HaMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalSubnets`<sup>Required</sup> <a name="LocalSubnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnets"></a>

```go
func LocalSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnGatewayV5Config <a name="EnterpriseVpnGatewayV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

&enterprisevpngatewayv5.EnterpriseVpnGatewayV5Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZones: *[]*string,
	Name: *string,
	AccessPrivateIp1: *string,
	AccessPrivateIp2: *string,
	AccessSubnetId: *string,
	AccessVpcId: *string,
	Asn: *f64,
	AttachmentType: *string,
	ConnectSubnet: *string,
	DeleteEip: interface{},
	Eip1: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1,
	Eip2: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2,
	ErId: *string,
	Flavor: *string,
	HaMode: *string,
	Id: *string,
	LocalSubnets: *[]*string,
	NetworkType: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#availability_zones EnterpriseVpnGatewayV5#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#name EnterpriseVpnGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp1">AccessPrivateIp1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_1 EnterpriseVpnGatewayV5#access_private_ip_1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp2">AccessPrivateIp2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_2 EnterpriseVpnGatewayV5#access_private_ip_2}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessSubnetId">AccessSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_subnet_id EnterpriseVpnGatewayV5#access_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessVpcId">AccessVpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_vpc_id EnterpriseVpnGatewayV5#access_vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.asn">Asn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#asn EnterpriseVpnGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#attachment_type EnterpriseVpnGatewayV5#attachment_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connectSubnet">ConnectSubnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#connect_subnet EnterpriseVpnGatewayV5#connect_subnet}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.deleteEip">DeleteEip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#delete_eip EnterpriseVpnGatewayV5#delete_eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip1">Eip1</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a></code> | eip1 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip2">Eip2</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a></code> | eip2 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.erId">ErId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#er_id EnterpriseVpnGatewayV5#er_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.flavor">Flavor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#flavor EnterpriseVpnGatewayV5#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.haMode">HaMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#ha_mode EnterpriseVpnGatewayV5#ha_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.localSubnets">LocalSubnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#local_subnets EnterpriseVpnGatewayV5#local_subnets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.networkType">NetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#network_type EnterpriseVpnGatewayV5#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#tags EnterpriseVpnGatewayV5#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#vpc_id EnterpriseVpnGatewayV5#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#availability_zones EnterpriseVpnGatewayV5#availability_zones}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#name EnterpriseVpnGatewayV5#name}.

---

##### `AccessPrivateIp1`<sup>Optional</sup> <a name="AccessPrivateIp1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp1"></a>

```go
AccessPrivateIp1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_1 EnterpriseVpnGatewayV5#access_private_ip_1}.

---

##### `AccessPrivateIp2`<sup>Optional</sup> <a name="AccessPrivateIp2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp2"></a>

```go
AccessPrivateIp2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_2 EnterpriseVpnGatewayV5#access_private_ip_2}.

---

##### `AccessSubnetId`<sup>Optional</sup> <a name="AccessSubnetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessSubnetId"></a>

```go
AccessSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_subnet_id EnterpriseVpnGatewayV5#access_subnet_id}.

---

##### `AccessVpcId`<sup>Optional</sup> <a name="AccessVpcId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessVpcId"></a>

```go
AccessVpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#access_vpc_id EnterpriseVpnGatewayV5#access_vpc_id}.

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.asn"></a>

```go
Asn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#asn EnterpriseVpnGatewayV5#asn}.

---

##### `AttachmentType`<sup>Optional</sup> <a name="AttachmentType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.attachmentType"></a>

```go
AttachmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#attachment_type EnterpriseVpnGatewayV5#attachment_type}.

---

##### `ConnectSubnet`<sup>Optional</sup> <a name="ConnectSubnet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connectSubnet"></a>

```go
ConnectSubnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#connect_subnet EnterpriseVpnGatewayV5#connect_subnet}.

---

##### `DeleteEip`<sup>Optional</sup> <a name="DeleteEip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.deleteEip"></a>

```go
DeleteEip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#delete_eip EnterpriseVpnGatewayV5#delete_eip}.

---

##### `Eip1`<sup>Optional</sup> <a name="Eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip1"></a>

```go
Eip1 EnterpriseVpnGatewayV5Eip1
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

eip1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#eip1 EnterpriseVpnGatewayV5#eip1}

---

##### `Eip2`<sup>Optional</sup> <a name="Eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip2"></a>

```go
Eip2 EnterpriseVpnGatewayV5Eip2
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

eip2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#eip2 EnterpriseVpnGatewayV5#eip2}

---

##### `ErId`<sup>Optional</sup> <a name="ErId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.erId"></a>

```go
ErId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#er_id EnterpriseVpnGatewayV5#er_id}.

---

##### `Flavor`<sup>Optional</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.flavor"></a>

```go
Flavor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#flavor EnterpriseVpnGatewayV5#flavor}.

---

##### `HaMode`<sup>Optional</sup> <a name="HaMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.haMode"></a>

```go
HaMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#ha_mode EnterpriseVpnGatewayV5#ha_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalSubnets`<sup>Optional</sup> <a name="LocalSubnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.localSubnets"></a>

```go
LocalSubnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#local_subnets EnterpriseVpnGatewayV5#local_subnets}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#network_type EnterpriseVpnGatewayV5#network_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#tags EnterpriseVpnGatewayV5#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.timeouts"></a>

```go
Timeouts EnterpriseVpnGatewayV5Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#timeouts EnterpriseVpnGatewayV5#timeouts}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#vpc_id EnterpriseVpnGatewayV5#vpc_id}.

---

### EnterpriseVpnGatewayV5Eip1 <a name="EnterpriseVpnGatewayV5Eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

&enterprisevpngatewayv5.EnterpriseVpnGatewayV5Eip1 {
	BandwidthName: *string,
	BandwidthSize: *f64,
	ChargeMode: *string,
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthName">BandwidthName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.chargeMode">ChargeMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}. |

---

##### `BandwidthName`<sup>Optional</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthName"></a>

```go
BandwidthName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}.

---

##### `BandwidthSize`<sup>Optional</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthSize"></a>

```go
BandwidthSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}.

---

##### `ChargeMode`<sup>Optional</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.chargeMode"></a>

```go
ChargeMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}.

---

### EnterpriseVpnGatewayV5Eip2 <a name="EnterpriseVpnGatewayV5Eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

&enterprisevpngatewayv5.EnterpriseVpnGatewayV5Eip2 {
	BandwidthName: *string,
	BandwidthSize: *f64,
	ChargeMode: *string,
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthName">BandwidthName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.chargeMode">ChargeMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}. |

---

##### `BandwidthName`<sup>Optional</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthName"></a>

```go
BandwidthName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}.

---

##### `BandwidthSize`<sup>Optional</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthSize"></a>

```go
BandwidthSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}.

---

##### `ChargeMode`<sup>Optional</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.chargeMode"></a>

```go
ChargeMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}.

---

### EnterpriseVpnGatewayV5Timeouts <a name="EnterpriseVpnGatewayV5Timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

&enterprisevpngatewayv5.EnterpriseVpnGatewayV5Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#create EnterpriseVpnGatewayV5#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#delete EnterpriseVpnGatewayV5#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#update EnterpriseVpnGatewayV5#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#create EnterpriseVpnGatewayV5#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#delete EnterpriseVpnGatewayV5#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/enterprise_vpn_gateway_v5#update EnterpriseVpnGatewayV5#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnterpriseVpnGatewayV5Eip1OutputReference <a name="EnterpriseVpnGatewayV5Eip1OutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.NewEnterpriseVpnGatewayV5Eip1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnterpriseVpnGatewayV5Eip1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthName">ResetBandwidthName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthSize">ResetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetChargeMode">ResetChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthName` <a name="ResetBandwidthName" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthName"></a>

```go
func ResetBandwidthName()
```

##### `ResetBandwidthSize` <a name="ResetBandwidthSize" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthSize"></a>

```go
func ResetBandwidthSize()
```

##### `ResetChargeMode` <a name="ResetChargeMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetChargeMode"></a>

```go
func ResetChargeMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthId">BandwidthId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipVersion">IpVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthNameInput">BandwidthNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSizeInput">BandwidthSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeModeInput">ChargeModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthName">BandwidthName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeMode">ChargeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthId`<sup>Required</sup> <a name="BandwidthId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthId"></a>

```go
func BandwidthId() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipVersion"></a>

```go
func IpVersion() *f64
```

- *Type:* *f64

---

##### `BandwidthNameInput`<sup>Optional</sup> <a name="BandwidthNameInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthNameInput"></a>

```go
func BandwidthNameInput() *string
```

- *Type:* *string

---

##### `BandwidthSizeInput`<sup>Optional</sup> <a name="BandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSizeInput"></a>

```go
func BandwidthSizeInput() *f64
```

- *Type:* *f64

---

##### `ChargeModeInput`<sup>Optional</sup> <a name="ChargeModeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeModeInput"></a>

```go
func ChargeModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BandwidthName`<sup>Required</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthName"></a>

```go
func BandwidthName() *string
```

- *Type:* *string

---

##### `BandwidthSize`<sup>Required</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSize"></a>

```go
func BandwidthSize() *f64
```

- *Type:* *f64

---

##### `ChargeMode`<sup>Required</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeMode"></a>

```go
func ChargeMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.internalValue"></a>

```go
func InternalValue() EnterpriseVpnGatewayV5Eip1
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

---


### EnterpriseVpnGatewayV5Eip2OutputReference <a name="EnterpriseVpnGatewayV5Eip2OutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.NewEnterpriseVpnGatewayV5Eip2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnterpriseVpnGatewayV5Eip2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthName">ResetBandwidthName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthSize">ResetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetChargeMode">ResetChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthName` <a name="ResetBandwidthName" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthName"></a>

```go
func ResetBandwidthName()
```

##### `ResetBandwidthSize` <a name="ResetBandwidthSize" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthSize"></a>

```go
func ResetBandwidthSize()
```

##### `ResetChargeMode` <a name="ResetChargeMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetChargeMode"></a>

```go
func ResetChargeMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthId">BandwidthId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipVersion">IpVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthNameInput">BandwidthNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSizeInput">BandwidthSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeModeInput">ChargeModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthName">BandwidthName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeMode">ChargeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthId`<sup>Required</sup> <a name="BandwidthId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthId"></a>

```go
func BandwidthId() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipVersion"></a>

```go
func IpVersion() *f64
```

- *Type:* *f64

---

##### `BandwidthNameInput`<sup>Optional</sup> <a name="BandwidthNameInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthNameInput"></a>

```go
func BandwidthNameInput() *string
```

- *Type:* *string

---

##### `BandwidthSizeInput`<sup>Optional</sup> <a name="BandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSizeInput"></a>

```go
func BandwidthSizeInput() *f64
```

- *Type:* *f64

---

##### `ChargeModeInput`<sup>Optional</sup> <a name="ChargeModeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeModeInput"></a>

```go
func ChargeModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BandwidthName`<sup>Required</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthName"></a>

```go
func BandwidthName() *string
```

- *Type:* *string

---

##### `BandwidthSize`<sup>Required</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSize"></a>

```go
func BandwidthSize() *f64
```

- *Type:* *f64

---

##### `ChargeMode`<sup>Required</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeMode"></a>

```go
func ChargeMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.internalValue"></a>

```go
func InternalValue() EnterpriseVpnGatewayV5Eip2
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

---


### EnterpriseVpnGatewayV5TimeoutsOutputReference <a name="EnterpriseVpnGatewayV5TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpngatewayv5"

enterprisevpngatewayv5.NewEnterpriseVpnGatewayV5TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnterpriseVpnGatewayV5TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



